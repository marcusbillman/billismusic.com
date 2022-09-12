export default {
  name: 'bannerMessage',
  type: 'document',
  title: 'Banner Message',
  fields: [
    {
      name: 'show',
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'Link URL',
      description: 'Where the user is taken when clicking the banner.',
    },
  ],
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
};
