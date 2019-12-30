---
layout: post
title: "FLT0: Fermat's Dream"
tags: FLT
---

{{ page.title }}
================

<span class="meta">{{ page.date | date_to_string }} --- Paris</span>

When I was a doctoral student I worked on some problems stemming from
the proof of [Fermat's Last
Theorem](https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem). The
proof of FLT is famously hard and long and, even today, my impression
is that few mathematicians are able to master the details of every
step of the proof.

I would be surprised
if there was a mathematician anywhere who has gone over the details of every
step of the full proof. When I was a student I became familiar with bits and
pieces of the argument and had a lot of "big picture" approximative about the
rest.

I no longer do math for a living, but I am still fascinated by the
prospect of understanding this beautiful chapter of pure
mathematics. So I am going to try an experiment. I intend to write a
series of blog posts, where I will try to explain the details (such as
they are) of the argument as I understand them.

The idea is that any graduate student of math with a solid grounding
in abstract algebra and some algebraic geometry will be able to follow
most of the arguments.  Most of all what is necessary is the ability
to work with "black boxes"

So, without further ado, let us get going! In this first post I will
explain the statement of Fermat's Last Theorem (FLT) and we will prove
the very first case of it (corresponding to the prime 2). This proof
goes back to Fermat himself and his method of "infinite descent". The
proof of this result actually ties up with a lot of other important
ideas in number theory, such as the congruent number problem and
Mordell's theorem on elliptic curves. While we will not touch upon
these on this post, I give a few pointers for those readers that want
to go further in the last section.

Finally, before we get going, do not hesitate to comment at the bottom
of the post, even if

# September 1994

On this date Andrew Wiles [proved](/static/wiles1995.pdf) finished the
proof of Fermat's Last Theorem, which states:

> *For $$n$$ greater than or equal to 3, there exist no positive integers $$x$$,
> $$y$$, $$z$$ satisfying the equation $$x^n + y^n = z^n.$$*

We will refer to this statement by $${\rm FLT}_n$$. Fermat's Last
Theorem had resisted a proof for more than 350 years.  Fermat
(1601--65) wrote his "Last Theorem" in 1630 in the margin of a book he
owned. Fermat also left the phrase "I found a remarkable proof for
this fact, but this margin is too narrow to write it down." This proof
has never been discovered (if it ever existed).

Note that $${\rm FLT}_2$$ is certainly not true; in fact the equation
for $$n = 2$$ has plenty of solutions, as follows from the Pythagorean
theorem. We will have more to say about this in the next section.
Since $${\rm FLT}_n$$ implies $${\rm FLT}_{\alpha n}$$ for any
positive integer $$\alpha$$ (do you see why?), it is enough to prove
$${\rm FLT}_4$$ and $${\rm FLT}_\ell$$ for every odd prime $$\ell$$.

In the rest of this post we will prove the very first case of this
Theorem, the case $${\rm FLT}_4$$ (corresponding to the even prime
$$2$$). To do that, we are going to use the fact that it is possible
to know all solutions Fermat's equation when $$n = 2$$ (ie the
familiar Phytagorean equation). After we discuss its solutions in the
next section we will be able to quickly deal with $${\rm FLT}_4$$ in
the last section.

# Pythagorean triples

It is well-known that there are many solutions to $$x^2 + y^2 = z^2$$
in positive integers, the so-called *Pytagorean triples*. Examples are
$$(3, 4, 5)$$ or $$(5, 12, 13)$$.

First, we deal with the equation $$x^2 + y^2 = z^2$$. We may assume
$$x$$, $$y$$, and $$z$$ are positive and relatively prime (if not,
just divide out by their common factors). If $$x$$ and $$y$$ are both
odd then $$z^2 \equiv 2 \pmod 4$$ which is impossible. Thus, we may
assume $$x$$ is even. Then

$$
\left(\frac{z-y}{2}\right)\left(\frac{z+y}{2}\right) = \left(\frac{x}{2}\right)^2
$$

with relatively prime factors on the left hand side (why?) and a square
on the right hand side. Hence each of the factors on the left hand side must be square:

$$
\frac{z-y}{2} = b^2,\quad\frac{z+y}{2} = a^2,
$$

for some positive integer $$a$$, $$b$$. It follows that $$z = a^2 + b^2$$,
$$y = a^2 - b^2$$ and $$x = 2ab$$.

# The proof of $${\rm FLT}_4$$

Fermat actually proved a slightly stronger result:

**Proposition.** *There is no solution $$(x, y, z)$$ to $$x^4 + y^4 = z^2$$
satisfying $$xyz \neq 0$$.*

Clearly this result implies $${\rm FLT}_4$$. The proof is short given
our understanding of Pythagorean triples; it uses the technique of
"infinite descent" that was introduced by Fermat for this very
problem. The idea is that, given a solution $$(x, y, z)$$ of this equation,
we will produce a *new* solution that has a smaller $$z$$. Since these are positive integers,
and the process can be repeated *ad infinitum*, there is 
and let us reach a contradiction.

# The proof of $${\rm FLT}_3$$

The key idea here is to work in the ring $$A = \mathbf Z[\zeta]$$,
where $$\zeta = e^{2\pi i/3}\in\mathbf C$$, a primitive cube root of
unity.

**Proposition.** *There is no solution $$(x, y, z)$$ to $$x^3 + y^3 = uz^3$$
in $$A$$, where $$u$$ is a unit in $$A$$.*

We can assume that 

# To go further

The proof of $${\rm FLT}_4$$ given above can be explained in terms of
elliptic curves $$y^2 = x^3 - x$$ and the multiplication-by-2 map (we
will have much more to say about elliptic curves in the following
weeks).

The proof of $${\rm FLT}_3$$ is related to Kummer's strategy.