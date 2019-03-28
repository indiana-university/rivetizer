/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

function rivetize(kmsXhtml, cssClasses) {
    return kmsXhtml
      .replace(/<div class="references [\s\w-]+">[^]+<\/div>/g, '')
      .replace(/<div>\s<p><a href="#top" title="">(.+)<\/a><\/p>\s<\/div>/g, '')
      .replace(/<hr\/>/g, '')
      .replace(/<h1>/g, '<h1 class="' + cssClasses.h1 + '">')
      .replace(/<h2(\sid="(.+)")?>/g, '<h2 id="$2" class="' + cssClasses.h2 + '">')
      .replace(/<h3(\sid="(.+)")?>/g, '<h3 id="$2" class="' + cssClasses.h3 + '">')
      .replace(/<p>/g, '<p class="' + cssClasses.p + '">')
      .replace(/<div class="panel panel-info">/g, '<div class="rvt-alert rvt-alert--info ' + cssClasses.alert + '">')
      .replace(/<div class="panel panel-danger">/g, '<div class="rvt-alert rvt-alert--message ' + cssClasses.alert + '">')
      .replace(/<pre class="(.+)">/g, '<pre><code class="hljs $1">')
      .replace(/<\/pre>/g, '</code></pre>');
}