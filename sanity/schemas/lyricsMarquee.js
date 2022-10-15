export default {
  name: 'lyricsMarquee',
  type: 'document',
  title: 'Lyrics Marquee',
  fields: [
    {
      name: 'lyricsMarquee1',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Lines for Lyrics Marquee 1',
      description: 'Shows below the Releases section.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lyricsMarquee2',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Lines for Lyrics Marquee 2',
      description: 'Shows below the Bio section.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lyricsMarquee3',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Lines for Lyrics Marquee 3',
      description: 'Shows below the About section.',
      validation: (Rule) => Rule.required(),
    },
  ],
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
};
