var toMarkdown = require(__dirname + '/../../src/to-markdown').toMarkdown;
var toHTML = require('markdown').markdown.toHTML;

exports['converting emphasis elements'] = function(test) {
  var markdown = '**Hello world**';
  test.equal(toMarkdown(toHTML(markdown)), markdown);
  test.done();
};

exports['converting inline code elements'] = function(test) {
  var markdown = '`print()`';
  test.equal(toMarkdown(toHTML(markdown)), markdown);
  test.done();
};

exports['converting heading elements'] = function(test) {
  var markdown = '# Hello world';
  test.equal(toMarkdown(toHTML(markdown)), markdown);
  markdown = '### Hello world';
  test.equal(toMarkdown(toHTML(markdown)), markdown);
  markdown = '###### Hello world';
  test.equal(toMarkdown(toHTML(markdown)), markdown);
  test.done();
};

exports['converting hr elements'] = function(test) {
  var markdown = '* * *';
  test.equal(toMarkdown(toHTML(markdown)), markdown);
  test.done();
};

exports['converting list elements'] = function(test) {
  var markdown = '*   Hello world\n\n*   Lorem ipsum'
  test.equal(toMarkdown(toHTML(markdown)), markdown);

  var nestedListMd = [
    "*   This is a list item at root level",
    "*   This is another item at root level",
    "    *   This is a nested list item",
    "    *   This is another nested list item",
    "        *   This is a deeply nested list item",
    "        *   This is another deeply nested list item",
    "        *   This is a third deeply nested list item",
    "*   This is a third item at root level"
  ].join('\n');
  test.equal(toMarkdown(toHTML(nestedListMd)), nestedListMd);

  nestedListMd = [
    "*   This is a list item at root level",
    "*   This is another item at root level",
    "    1.  This is a nested list item",
    "    2.  This is another nested list item",
    "        *   This is a deeply nested list item",
    "        *   This is another deeply nested list item",
    "        *   This is a third deeply nested list item",
    "*   This is a third item at root level"
  ].join('\n');
  test.equal(toMarkdown(toHTML(nestedListMd)), nestedListMd);

  test.done();
};

exports['converting blockquotes'] = function(test) {
  var markdown = [
    "> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.",
    "> ",
    "> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing."
  ].join('\n');
  test.equal(toMarkdown(toHTML(markdown)), markdown);

  markdown = [
    "> ## This is a header.",
    "> ",
    "> 1.  This is the first list item.",
    "> 2.  This is the second list item.",
    "> ",
    "> Here's some example code:",
    "> ",
    ">     return shell_exec(\"echo $input | $markdown_script\");"
  ].join('\n');
  console.log(toHTML(markdown));
  test.equal(toMarkdown(toHTML(markdown)), markdown);

  test.done();
};
