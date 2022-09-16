import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Bio')
        .child(S.document().schemaType('bio').documentId('bio')),
      S.listItem()
        .title('Banner Message')
        .child(
          S.document().schemaType('bannerMessage').documentId('bannerMessage')
        ),
      S.listItem()
        .title('Lyrics Marquee')
        .child(
          S.document().schemaType('lyricsMarquee').documentId('lyricsMarquee')
        ),
      S.listItem()
        .title('About')
        .child(S.document().schemaType('about').documentId('about')),
      ...S.documentTypeListItems().filter(
        (item) =>
          !['bio', 'bannerMessage', 'lyricsMarquee', 'about'].includes(
            item.getId()
          )
      ),
    ]);
