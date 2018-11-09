# Assignment Overview: Lab 15

## Merge Conflict Exercise

Merge conflicts occur when files get out of sync between GitHub and a user's local codebase, and Git becomes unsure of where `HEAD` really is.

Let's describe and experience how a pretend team would get into that situation and then extricate themselves from it.

One team member should create a repository called `mc-exercise` and add all other teammates as collaborators (in the 'Settings' tab, look for 'Collaborators' in the nav on the left of the screen.)

Assign a member of your team to each character, and then do what they do. And do ONLY what they do.

Our sample team has four members: Bob, Carol, Ted, and Alice. Add a file called `FUBAR.md` to the `master` branch of the repo. When we start, everyone is totally in sync and freshly pulled from `master` on their individual laptops, and has `FUBAR.md`. Bob and Carol are pair-programming one feature in `FUBAR.md` on Carol's laptop in a new feature branch, and Ted and Alice are working on another feature in a different non-master feature branch on Ted's laptop, also in `FUBAR.md`.

For the purposes of this exercise, the work you're doing on a feature, always in `FUBAR.md`, consists of adding a sentence or two of "This is what Bob & Carol did on Bob's computer when working on the first feature" and maybe a joke or something to keep your teammates amused.

Bob and Carol get their feature finished and do a A-C-P of their branch from Carol's laptop and make a PR. Ted & Alice review the feature, deem that it is good and subsequently merge it. Ted & Alice then do a `git pull origin master` into their feature branch on Ted's laptop ONLY and continue working on that feature.

In the meantime, Bob & Carol have switched to Bob's laptop, started a new feature branch in `FUBAR.md`, and started working on it. They did not do a `git pull origin master` and will live to regret it. They finish that feature at the same time that Ted & Alice finish their feature. Each team does an A-C-P and makes a PR. They review each other's PRs and attempt to merge them.

Chaos ensues. Try to get it sorted out, referring to the instructions on the Git workflow document in the class repo. Get everyone's individual laptop back in sync by doing a `git pull origin master` into `master` until Git stops complaining
Then they switch partners, of course. Bob & Alice start a quick new feature on her laptop in the `master` branch and Ted & Carol start another new feature of their own, also in `master`. They finish these quick features, and attempt to A-C-P and create/merge PRs.

**MERGE CONFLICTS** erupt like a horde of screaming sugar-filled children in a Chuck-E-Cheese.

It's time to get them sorted out.

---

How could these problems have been prevented?

Review the workflow on Bob & Carol & Ted & Alice and try to identify all of the individual things that they did wrong **AND** all of the things that they should have done but failed to do. Write up descriptions of those things and put those into the README of the repo.

For today's lab assignment in Canvas, submit your individual thoughts on this exercise and what you learned from it. 2-3 sentences is minimally adequate.
