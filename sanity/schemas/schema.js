import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import release from './release';
import bannerMessage from './bannerMessage';
import lyricsMarquee from './lyricsMarquee';
import bio from './bio';
import about from './about';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    release,
    bannerMessage,
    lyricsMarquee,
    bio,
    about,
  ]),
});
