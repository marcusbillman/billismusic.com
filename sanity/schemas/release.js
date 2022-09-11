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
      name: 'streamUrl',
      type: 'url',
      title: 'Stream URL',
      description:
        'Link to this release on DistroKid or Linkfire, which in turn links to all streaming services.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverArt',
      type: 'image',
      title: 'Cover Art',
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
