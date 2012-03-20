---
layout: name
title: Software
section: about
---

Writing
-------

-   [Pandoc][]

If you are fed up with Microsoft Word and thinking about drinking the
LaTeX koolaid, take a good hard look at pandoc first.

Pandoc is a command line tool that converts documents from one markup
format to another. For academic writing, the key point is that it
converts its own [extended][] [markdown][] into HTML, LaTeX, PDF, ePub,
Microsoft Word's DOCX, and OpenOffice's ODT. Pandoc's extended markdown
includes everything you need to write and structure a philosophy paper:
footnotes, labeled propositions (i.e., "definition lists"), citations,
diagrams, support for LaTeX maths... With few exceptions, anything you
can't do in pandoc's markdown is probably something you shouldn't be
doing anyway.

For more on the virtues of writing in pandoc, see [this post][] by
[Michael Thompson][] and [this followup][] by [John MacFarlane][]. Note
that this exchange is a bit over a year old, and pandoc has since been
extended to support the three features MacFarlane mentions: [LaTeX
macros][], and [non-continguous numbered example lists][] with labels
that can be used as cross-references (this last is not as flexible or
powerful as LaTeX's support for cross-references: count that as one
remaining shortcoming in pandoc for academic writers).

My preferred text editor is

-   ~~[TextMate][]~~
-   [MacVim][]

I switched from TextMate to MacVim about a year ago, and haven't looked
back. TextMate is a wonderful text editor, with an easy learning curve
and a lot of powerful features. MacVim is just as powerful, and, for me,
easier on the fingers, but it has a steep learning curve. And since
MacVim is just Vim, and Vim is available on just about every computer in
existence, my investment in muscle memory should be reasonably future
proof.

I also use

-   ~~[Notational Velocity][]~~
-   [nvAlt][] (Brett Terpstra's fork of Notational Velocity)

for storing quick notes and pounding out very rough drafts. But I find
that I miss vim's normal mode. I've been playing with

-   [KeyRemap4MacBook][]

which aims to provide something close to vim's normal mode everywhere,
but it isn't sticking.

As things progress, it is helpful to keep track of revisions. For this,
I use

-   [git][]

Git is version control software. If you write in plain-text, you should
use this. For more on using git in the context of writing philosophy
papers, see [Mark Kalderon's Blog][] and [the PhilTeX blog][].

Research
--------

-   [Zotero][]

I am hoping that [Zotero Standalone][] is the first step toward a clean
and simple OS X client. For now, I use

-   [Zot2Bib][]

which bypasses Zotero's client, and sends scraped data directly to

-   [BibDesk][]

Unfortunately, it does not send the PDF along as well.

BibDesk is a great piece of software, but it is also a bit frustrating.
BibTeX is an aging bibilographic database format, and BibDesk's web
scraping and export options leave a lot to be desired. So using it with
Zot2Bib seems to be the best compromise at the moment.

For reading and annotating PDFs, I use

-   [Skim][]

Apple's Preview.app keeps getting better at annotations. I'm not sure
how much better Skim is at this point.

Other things
------------

-   [Quicksilver][] (an OSX application launcher and much much more)
-   [SimpleNote][] (simple text notes made simple on iOS; syncs with
    Notational Velocity)
-   [Evernote][] (less simple notes and not quite as simple, syncs with
    everything)
-   [Dropbox][] (sharing files between computers made simple)
-   [Pentadactyl][] (a vim-like interface for Firefox)

  [Pandoc]: http://johnmacfarlane.net/pandoc/
  [extended]: http://johnmacfarlane.net/pandoc/README.html#pandocs-markdown-vs.standard-markdown
  [markdown]: http://daringfireball.net/projects/markdown/
  [this post]: http://groups.google.com/group/pandoc-discuss/msg/5eb2960b289e283a?
  [Michael Thompson]: http://www.pitt.edu/~mthompso/
  [this followup]: http://groups.google.com/group/pandoc-discuss/msg/8bc08df6183d4642
  [John MacFarlane]: http://johnmacfarlane.net/
  [LaTeX macros]: http://johnmacfarlane.net/pandoc/README.html#macros
  [non-continguous numbered example lists]: http://johnmacfarlane.net/pandoc/README.html#numbered-example-lists
  [TextMate]: http://macromates.com/
  [MacVim]: http://code.google.com/p/macvim/
  [Notational Velocity]: http://notational.net/
  [nvAlt]: http://brettterpstra.com/project/nvalt/
  [KeyRemap4MacBook]: http://pqrs.org/macosx/keyremap4macbook/
  [git]: http://git.or.cz/
  [Mark Kalderon's Blog]: http://markelikalderon.com/category/version-control/git/
  [the PhilTeX blog]: http://www.charlietanksley.net/philtex/category/git/
  [Zotero]: http://www.zotero.org/
  [Zotero Standalone]: http://www.zotero.org/support/standalone
  [Zot2Bib]: http://mackerron.com/zot2bib/
  [BibDesk]: http://bibdesk.sourceforge.net/
  [Skim]: http://skim-app.sourceforge.net/
  [Quicksilver]: http://qsapp.com
  [SimpleNote]: http://simplenoteapp.com/
  [Evernote]: http://www.evernote.com/
  [Dropbox]: https://www.getdropbox.com/referrals/NTg1MzM4OQ
  [Pentadactyl]: http://dactyl.sourceforge.net/pentadactyl/
