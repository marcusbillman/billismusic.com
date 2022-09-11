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
      name: 'text',
      type: 'string',
      title: 'Text',
      description:
        'This short message shows at the top of the website. To make part of the message bold, surround it with *asterisks*.',
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
