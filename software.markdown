---
layout: name
title: Software
section: about
---

[Pandoc][]
----------

If you are fed up with Microsoft Word and thinking about drinking the
LaTeX koolaid, take a good hard look at pandoc first. If you are
attracted to the trendy minimalist markdown friendly text editors
(Writeroom, ByLine, iAWriter, etc.), and thinking about using
[MultiMarkdown][], take a good hard look at pandoc too.

Pandoc is a command line tool that converts documents from one markup
format to another. In particular, it converts its own [extended][]
[markdown][] into HTML, LaTeX, PDF, ePub, Microsoft Word's DOCX, and
OpenOffice's ODT. Pandoc's extended markdown includes just about
everything you need to write and structure a philosophy paper:
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

If you would rather not use pandoc from the command line, and you are on
OS X, you might be interested in one of the following,

-   [Pandoc Droplets and Services][]
-   [TextMate Bundle for Pandoc][]

Text Editor
-----------

-   ~~[TextMate][]~~
-   [MacVim][]

I switched from TextMate to MacVim, and haven't looked back. TextMate is
a wonderful text editor, with an easy learning curve and a lot of
powerful features. MacVim is just as powerful, and, for me, easier on
the fingers, but it has a steep learning curve. And since MacVim is just
Vim, and Vim is available on just about every computer in existence, my
investment in muscle memory should be reasonably future proof.

If you use both Vim and pandoc, you might be interested in

-   [vim-pandoc][]

Notes
-----

I also use

-   ~~[Notational Velocity][]~~
-   [nvAlt][] (Brett Terpstra's fork of Notational Velocity)

for storing quick notes and (sometimes) pounding out very rough drafts.
But I find that I miss Vim's normal mode.

Version Control
---------------

As things progress, it is helpful to keep track of revisions. For this,
I use

-   [git][]

Git is version control software. If you write in plain-text, you should
use this. For more on using git in the context of writing philosophy
papers, see [Mark Kalderon's Blog][] and [the PhilTeX blog][].

Research
--------

The best tool for downloading bibliographic data is

-   [Zotero][]

I am hoping that [Zotero Standalone][] is the first step toward a clean
and simple OS X client. For now, I use

-   [Zot2Bib][]

which bypasses Zotero's client, and sends the scraped data directly to

-   [BibDesk][]

Unfortunately, it does not send the PDF along as well.

BibDesk is a great piece of software, designed for managing a BibTeX
database with attached PDF files. It keeps all my PDFs organized in a
folder, with reasonable names. And pandoc makes use of the BibTeX
database for auto-formatting citations.

PDFs
----

For reading and annotating PDFs, I use

-   [Skim][]

Apple's Preview.app keeps getting better at annotations. I'm not sure
how much better Skim is at this point, but Skim is what I am used to.

(This is the one thing that keeps me from seriously considering Linux:
no adequate PDF viewer with support for annotations.)

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
  [MultiMarkdown]: http://fletcherpenney.net/multimarkdown/
  [extended]: http://johnmacfarlane.net/pandoc/README.html#pandocs-markdown-vs.standard-markdown
  [markdown]: http://daringfireball.net/projects/markdown/
  [this post]: http://groups.google.com/group/pandoc-discuss/msg/5eb2960b289e283a?
  [Michael Thompson]: http://www.pitt.edu/~mthompso/
  [this followup]: http://groups.google.com/group/pandoc-discuss/msg/8bc08df6183d4642
  [John MacFarlane]: http://johnmacfarlane.net/
  [LaTeX macros]: http://johnmacfarlane.net/pandoc/README.html#macros
  [non-continguous numbered example lists]: http://johnmacfarlane.net/pandoc/README.html#numbered-example-lists
  [Pandoc Droplets and Services]: https://github.com/dsanson/Pandoc-Droplets-and-Services
  [TextMate Bundle for Pandoc]: https://github.com/dsanson/Pandoc.tmbundle
  [TextMate]: http://macromates.com/
  [MacVim]: http://code.google.com/p/macvim/
  [vim-pandoc]: https://github.com/vim-pandoc/vim-pandoc
  [Notational Velocity]: http://notational.net/
  [nvAlt]: http://brettterpstra.com/project/nvalt/
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
