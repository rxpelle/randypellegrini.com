const GRINDS_EMAILS = [
  {
    day: 0,
    subject: 'Your reading + a free story (patterns hide in plain sight)',
    body: function(name) {
      return (name ? 'Hi ' + name + ',\n\n' : 'Hi,\n\n') +
        'So you let an AI read your coffee grounds. I respect that.\n\n' +
        'Hopefully the reading gave you something interesting to think about — or at least made you look at the bottom of your cup differently. That\'s kind of the whole point of the series these readings are tied to. Patterns that everyone else walks past.\n\n' +
        'Speaking of patterns — I wrote a short prequel to the series called "The Edmund Fragments." It\'s set in 1348, right before the Black Death tears through Europe, and follows a monk who discovers that the manuscript he\'s been copying contains something far more dangerous than scripture.\n\n' +
        'It\'s yours, free:\n\n' +
        'PDF: https://randypellegrini.com/assets/downloads/The%20Edmund%20Fragments.pdf\n' +
        'EPUB: https://randypellegrini.com/assets/downloads/The%20Edmund%20Fragments.epub\n\n' +
        'It\'s about 5,000 words — a single sitting. And it\'ll set up everything that happens in Book 1.\n\n' +
        'Oh, and if you want another reading sometime, the page is always open:\n' +
        'https://randypellegrini.com/read-your-grounds.html\n\n' +
        'Thanks for being curious enough to try it.\n\n' +
        'Randy\n\n' +
        'P.S. The tasseography page is themed around The Genesis Protocol (Book 2), but The Edmund Fragments connects to Book 1 — The Aethelred Cipher. The series threads everything together across 3,200 years. You\'ll see.';
    }
  },
  {
    day: 3,
    subject: 'People have been reading coffee grounds for 600 years (seriously)',
    body: function(name) {
      return (name ? name + ',\n\n' : 'Hey,\n\n') +
        'Quick bit of history that might change how you think about that reading you got.\n\n' +
        'Tasseography — reading tea leaves and coffee grounds — has been practiced since at least the 1400s. Ottoman fortune tellers would flip a coffee cup, let the grounds dry, and read the shapes left behind. It spread through the Middle East, across Europe, and into Victorian parlors where it became a full-on social ritual.\n\n' +
        'What I find fascinating isn\'t whether it "works." It\'s that humans have been looking at residue patterns and finding meaning in them for centuries. We\'re wired to detect patterns — even where none exist. Or especially where none exist.\n\n' +
        'That idea is basically the engine of The Genesis Protocol. Sarah Chen — the protagonist — is an MIT geneticist who discovers that a centuries-old network has been reading patterns in civilization the same way a tasseographer reads a cup. Faint signals that precede collapse. And she has 72 hours to memorize the locations of 47 bioweapon hubs before the people running them realize what she knows.\n\n' +
        'If the reading you got on the grounds page hooked you at all, this is the book it came from:\n' +
        'https://www.amazon.com/dp/B0GPM973N1\n\n' +
        'It\'s $2.99 and on Kindle Unlimited.\n\n' +
        'Randy\n\n' +
        'P.S. Did you read The Edmund Fragments yet? If you haven\'t, no pressure — but it\'s a fast one. Pairs well with coffee.';
    }
  },
  {
    day: 7,
    subject: '3,200 years. 12 books. One network.',
    body: function(name) {
      return (name ? 'Hey ' + name + ',\n\n' : 'Hey,\n\n') +
        'I wanted to give you the full picture of what I\'m building, because the grounds reading you got is just one small piece of it.\n\n' +
        'The Architecture of Survival is a 12-book series spanning 3,200 years and 111 generations of a single defensive network. The concept: a hidden organization has been detecting civilizational collapse before it happens — reading patterns the way your coffee grounds got read — and engineering humanity\'s survival from the shadows.\n\n' +
        'Each book is a different era, a different crisis, a different protagonist. But the network threads through all of them.\n\n' +
        'Here\'s what\'s out now:\n\n' +
        'Book 1 — The Aethelred Cipher (medieval, 1348)\n' +
        'A monk, a warrior woman, and a girl carrying 40 generations of genetic memory race across plague-ravaged Europe to find six hidden keys before a rival faction does.\n' +
        '$0.99 / Free on Kindle Unlimited\n' +
        'https://www.amazon.com/Aethelred-Cipher-Conspiracy-Shepherding-Architecture-ebook/dp/B0GJTGCHS2/\n\n' +
        'Book 2 — The Genesis Protocol (modern, 2025)\n' +
        'MIT geneticist Sarah Chen discovers a bioweapon deployment plan across 47 cities. 72 hours to memorize everything. The coffee mug on the grounds page? That\'s from her story.\n' +
        '$2.99 / Free on Kindle Unlimited\n' +
        'https://www.amazon.com/dp/B0GPM973N1\n\n' +
        'If you like conspiracy thrillers, historical fiction, or stories where the scope keeps getting bigger — this is the series.\n\n' +
        'Randy\n\n' +
        'P.S. Book 1 is under a dollar right now. Just saying.';
    }
  },
  {
    day: 14,
    subject: 'What 56 readers thought (4.8 stars)',
    body: function(name) {
      return (name ? name + ',\n\n' : 'Hey,\n\n') +
        'I don\'t usually do the "look at my reviews" thing, but people keep saying stuff that genuinely surprises me, so I\'m sharing a few.\n\n' +
        'The Aethelred Cipher has 56 ratings and sits at 4.8 stars. Here\'s what readers are saying:\n\n' +
        '"The pacing is relentless — I finished it in two sittings."\n' +
        '"Eco meets Dan Brown, but darker and more grounded."\n' +
        '"The genetic memory concept is fascinating. I want to know more about the network."\n' +
        '"I didn\'t expect a medieval thriller to make me think about modern conspiracies this much."\n\n' +
        'I don\'t have a marketing team. I don\'t have a publisher. I have readers who take a chance on a book and then tell other people about it. That\'s it.\n\n' +
        'So if you\'ve been on the fence — or you downloaded The Edmund Fragments and liked it — here\'s the move:\n\n' +
        'Start with Book 1 ($0.99):\n' +
        'https://www.amazon.com/Aethelred-Cipher-Conspiracy-Shepherding-Architecture-ebook/dp/B0GJTGCHS2/\n\n' +
        'Then grab Book 2 ($2.99):\n' +
        'https://www.amazon.com/dp/B0GPM973N1\n\n' +
        'Both are on Kindle Unlimited if you\'re a subscriber.\n\n' +
        'And if you already read one — thank you. Genuinely.\n\n' +
        'Randy';
    }
  },
  {
    day: 25,
    subject: 'Did the patterns make sense?',
    body: function(name) {
      return (name ? 'Hey ' + name + ',\n\n' : 'Hey,\n\n') +
        'It\'s been a few weeks since you got your grounds reading. I\'m curious — have you picked up either of the books?\n\n' +
        'No pressure either way. But if you did read one, I\'d love to know what you thought. A quick Amazon review — even two sentences — makes a massive difference for an indie author. It\'s literally how the algorithm decides whether to show the book to other people.\n\n' +
        'Review The Aethelred Cipher:\n' +
        'https://www.amazon.com/Aethelred-Cipher-Conspiracy-Shepherding-Architecture-ebook/dp/B0GJTGCHS2/\n\n' +
        'Review The Genesis Protocol:\n' +
        'https://www.amazon.com/dp/B0GPM973N1\n\n' +
        'And if you haven\'t read yet — totally fine. The books aren\'t going anywhere. Your grounds reading isn\'t either (you can go back and see it anytime).\n\n' +
        'Here\'s what\'s coming next: I\'m working on the next book in the series, which will take the network into a completely different era. I\'m not going to spoil which one yet, but if you\'ve read Book 1 and Book 2, you\'ll start to see the shape of the larger story — how the same patterns repeat across centuries.\n\n' +
        'Kind of like the patterns in your cup. Except with higher stakes.\n\n' +
        'I\'ll keep you posted. And if you ever want another reading:\n' +
        'https://randypellegrini.com/read-your-grounds.html\n\n' +
        'Thanks for being here.\n\n' +
        'Randy\n\n' +
        'P.S. If you want more behind-the-scenes stuff — research rabbit holes, series updates, the weird historical facts that fuel the books — I post regularly on the blog: https://randypellegrini.com/blog.html';
    }
  }
];
