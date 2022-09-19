export default {
  name: 'release',
  type: 'document',
  title: 'Release',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      title: 'Slug (technical name)',
      description:
        'Required for some website features, like audio preview. Click "Generate" to create a slug based on the Title above.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: 'For example "Single" or "EP."',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverArt',
      type: 'image',
      title: 'Cover Art',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'previewAudio',
      type: 'file',
      options: {
        accept: 'audio/*',
      },
      title: 'Preview Audio',
      description:
        'A short audio preview (~20 seconds) that can be played directly on the website. Either trim the file before uploading or set the start and end time below. mp3 files are smaller and therefore load faster for the user.',
      fields: [
        {
          name: 'startTime',
          type: 'number',
          options: {
            isHighlighted: true,
          },
          title: 'Start Time (seconds)',
          description: 'Leave blank to start at the beginning of the file.',
          hidden: ({ parent, value }) => !parent,
          validation: (Rule) => Rule.positive().precision(1),
        },
        {
          name: 'endTime',
          type: 'number',
          options: {
            isHighlighted: true,
          },
          title: 'End Time (seconds)',
          description: 'Leave blank to stop at the end of the file.',
          hidden: ({ parent, value }) => !parent,
          validation: (Rule) =>
            Rule.positive()
              .custom((endTime, context) => {
                const minValue = context.document.previewAudio.startTime || 0;
                return endTime < minValue
                  ? 'End time cannot be less than start time, because that would require time travel'
                  : true;
              })
              .precision(1),
        },
      ],
    },
    {
      name: 'streamUrl',
      type: 'url',
      title: 'Stream URL',
      description:
        'Link to this release on DistroKid or Linkfire, which in turn links to all streaming services.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'releaseDate',
      type: 'date',
      title: 'Release Date',
      description: 'Date when this release was published through DistroKid.',
    },
  ],
  initialValue: {
    subtitle: 'Single',
  },
};
