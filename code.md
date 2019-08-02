---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Code
permalink: /code/
---

I am interested in programming languages in a broad sense:
compilers, interpreters, network protocols, virtual machines, emulation,
GUI programming. Most of my code is written
in OCaml and hosted on [Github](https://github.com/nojb).

- [ocaml](https://github.com/ocaml/ocaml/pulls?utf8=%E2%9C%93&q=author%3Anojb%20)
  --- core developer since Nov 2017

- [riscv-ocaml](https://github.com/nojb/riscv-ocaml) --- ported the full OCaml
  system to the RISC-V architecture. It will be eventually upstreamed.

- [dune](https://github.com/ocaml/dune/pulls?utf8=%E2%9C%93&q=author%3Anojb%20)
  --- part of developer team since Oct 2018

- [mirage-tcpip](https://github.com/mirage/mirage-tcpip) --- implemented IPv6
  for the [MirageOS] TCP/IP stack

- [llpp](https://github.com/nojb/llpp) --- ported the `llpp` PDF viewer to
  macOS

- [matis2github](https://github.com/nojb/mantis2github) --- migrated the OCaml
  bugtracker (18 years worth of data) to GitHub issues

- [omd](https://github.com/ocaml/omd) --- maintainer since Nov 2018

- [caml-list](https://inbox.ocaml.org/caml-list) --- and deployed a mirror
  using [public-inbox]

- [cmt\_annot](https://github.com/LexiFi/cmt_annot) --- reimplement `.annot`
  functionality using `.cmt` files

#### experiments, unfinished & unmaintained projects

- [ocaml-explorer](https://nojb.github.io/ocaml-explorer) --- experiment
  running the OCaml native-code compiler in the browser

- [ocaml-imap](https://github.com/nojb/ocaml-imap) --- an IMAPrev1 client
  protocol in pure OCaml

- [ocaml-gccjit](https://github.com/nojb/ocaml-gccjit) --- OCaml bindings for
  the `libgccjit` library

- [ocaml-gsasl](https://github.com/nojb/ocaml-gsasl) --- OCaml bindings for
  the GNU SASL library

- [tiger-interp](https://github.com/nojb/tiger-interp) --- an interpreter for
  [Tiger]

- [tiger2ml](https://github.com/nojb/tiger2ml) --- a source-to-source translator
  from [Tiger] to OCaml

- [llvm-tiger](https://github.com/nojb/llvm-tiger) --- a compiler for [Tiger]
  targeting LLVM

- [ppx\_ocamllex](https://github.com/nojb/ppx_ocamllex) --- define `ocamllex`
  lexers directly inside OCaml programs

- [ocaml-macaroons](https://github.com/nojb/ocaml-macaroons) --- an OCaml
  implementation of [Macaroons]

- [ocaml-graphics-osx](https://github.com/nojb/ocaml-graphics-osx) --- a port of
  the OCaml Graphics module to Cocoa

- [tortuga](https://github.com/nojb/tortuga) --- a Logo implementation

- [c0-jvm](https://github.com/nojb/c0-jvm) --- a compiler from the [C0]
  programming language to JVM bytecode

- [gen\_google\_api](https://github.com/nojb/gen_google_api) --- an OCaml
  binding generator for Google APIs

- [bigstring-ppx](https://github.com/nojb/bitstring-ppx) --- ppx port of the
  [ocaml-bigstring] library

<!-- <li> -->
<!--   <a href="https://github.com/nojb/ocaml-utp"><kbd>ocaml-utp</kbd></a> &mdash; -->
<!--   OCaml bindings for BitTorrent Inc.'s -->
<!--   <a href="https://github.com/bittorrent/libutp"><kbd>libutp</kbd></a> library -->
<!-- </li> -->

<!-- <li> -->
<!--   <a href="https://github.com/nojb/ocaml-dht"><kbd>ocaml-dht</kbd></a> &mdash; OCaml -->
<!--   bindings for <a href="https://github.com/jech/dht"><kbd>libdht</kbd></a> -->
<!-- </li> -->

<!-- <li> -->
<!--   <a href="https://github.com/nojb/ocaml-bt"><kbd>ocaml-bt</kbd></a> &mdash; -->
<!--   OCaml implementation of the BitTorrent protocol -->
<!-- </li> -->

- [llvm-min-caml](https://github.com/nojb/llvm-min-caml) --- an LLVM backend for
  the [min-caml](http://esumii.github.io/min-caml/index-e.html) compiler

- [scheme2ml](https://github.com/nojb/scheme2ml) --- a source-to-source
  translator from Scheme to OCaml

- [llvm-bf](https://github.com/nojb/llvm-bf) --- a compiler from Brainf*ck to
  LLVM

- [ppx\_fbt\_trace](https://github.com/nojb/ppx_fbt_trace) --- a ppx port of of
  [pa\_fbt\_trace](https://github.com/avsm/ocaml-fbt-trace)

- [staged-ocs](https://github.com/nojb/staged-ocs) --- a [metaocaml]-staged
  interpreter of R5RS Scheme

- [ocaml-maildir](https://github.com/nojb/ocaml-maildir) --- OCaml library to
  interact with Maildir

[ocaml-bigstring]: https://code.google.com/p/bitstring/
[Tiger]: https://www.cs.princeton.edu/~appel/modern/
[Macaroons]: http://research.google.com/pubs/pub41892.html
[C0]: http://c0.typesafety.net
[MirageOS]: https://mirage.io
[public-inbox]: https://public-inbox.org/README
[metaocaml]: http://okmij.org/ftp/ML/MetaOCaml.html
