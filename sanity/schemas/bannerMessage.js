export default {
  name: 'bannerMessage',
  type: 'document',
  title: 'Banner Message',
  fields: [
    {
      name: 'isEnabled',
      type: 'boolean',
      title: 'Show Banner',
      description: 'Disable this to remove the banner from the website.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          marks: {
            decorators: [{ title: 'Bold', value: 'strong' }],
            annotations: [],
          },
          lists: [],
        },
      ],
      title: 'Banner Text',
      description: 'The banner only fits a single paragraph of text.',
      validation: (Rule) =>
        Rule.required()
          .max(1)
          .error('The banner only fits a single paragraph of text'),
    },
    {
      name: 'url',
      type: 'url',
      title: 'Link URL',
      description:
        'Where the user goes when clicking the banner. Leave this empty to make the banner non-clickable.',
    },
  ],
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
};
