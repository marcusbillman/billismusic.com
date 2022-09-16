export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'content1',
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
      title: 'Part 1',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content2',
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
      title: 'Part 2',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content3',
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
      title: 'Part 3 (Large)',
      description: 'Shows in big font below the image.',
      validation: (Rule) => Rule.required(),
    },
  ],
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
};
