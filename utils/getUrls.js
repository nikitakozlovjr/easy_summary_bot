import * as linkify from 'linkifyjs';

export default (text) => linkify.find(text).filter((item) => item.type === 'url').map(({ href }) => href);