export default {
  name: 'bio',
  type: 'document',
  title: 'Bio',
  fields: [
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
      title: 'Bio Text',
      validation: (Rule) => Rule.required(),
    },
  ],
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
};
