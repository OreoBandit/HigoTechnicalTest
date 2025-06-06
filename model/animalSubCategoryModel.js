import salmon from '../Assets/Images/vertebrates/salmon.webp';
import tuna from '../Assets/Images/vertebrates/tuna.webp';
import swordfish from '../Assets/Images/vertebrates/swordfish.png';
import shark from '../Assets/Images/vertebrates/shark.png';
import betta from '../Assets/Images/vertebrates/betta.png';
import frog from '../Assets/Images/vertebrates/frog.png';
import salamander from '../Assets/Images/vertebrates/salamander.png';
import newt from '../Assets/Images/vertebrates/newt.png';
import snake from '../Assets/Images/vertebrates/snake.png';
import lizard from '../Assets/Images/vertebrates/lizard.webp';
import turtle from '../Assets/Images/vertebrates/turtle.png';
import eagle from '../Assets/Images/vertebrates/eagle.png';
import parrot from '../Assets/Images/vertebrates/parrot.png';
import penguin from '../Assets/Images/vertebrates/penguin.png';
import cow from '../Assets/Images/vertebrates/cow.webp';
import elephant from '../Assets/Images/vertebrates/elephant.png';
import cat from '../Assets/Images/vertebrates/cat.png';
import ant from '../Assets/Images/invertebrates/ant.png';
import butterfly from '../Assets/Images/invertebrates/butterfly.webp';
import bee from '../Assets/Images/invertebrates/bee.webp';
import spider from '../Assets/Images/invertebrates/spider.png';
import scorpion from '../Assets/Images/invertebrates/scorpion.png';
import tick from '../Assets/Images/invertebrates/tick.png';
import crab from '../Assets/Images/invertebrates/crab.webp';
import lobster from '../Assets/Images/invertebrates/lobster.webp';
import shrimp from '../Assets/Images/invertebrates/shrimp.png';
import snail from '../Assets/Images/invertebrates/snail.png';
import octopus from '../Assets/Images/invertebrates/octopus.png';
import squid from '../Assets/Images/invertebrates/squid.png';
import earthworm from '../Assets/Images/invertebrates/earthworm.png';
import leech from '../Assets/Images/invertebrates/leech.png';
import polychaete from '../Assets/Images/invertebrates/polychaete.png';

export const animalSubCategoryModel = {
  Fish: {
    Salmon: {
      title: 'Salmon',
      img: salmon,
      desc: 'Salmon can swim upstream to lay their eggs in the very river where they were born!',
    },
    Tuna: {
      title: 'Tuna',
      img: tuna,
      desc: 'Tuna are one of the fastest fish, capable of swimming up to 75 km/h (47 mph)!',
    },
    Swordfish: {
      title: 'Swordfish',
      img: swordfish,
      desc: 'Swordfish use their sharp “swords” to slash through schools of smaller fish.',
    },
    Shark: {
      title: 'Shark',
      img: shark,
      desc: 'Some sharks have been around for over 400 million years, predating dinosaurs!',
    },
    Betta: {
      title: 'Betta',
      img: betta,
      desc: 'Male Betta fish build bubble nests to protect their eggs and babies.',
    },
  },
  Amphibian: {
    Frog: {
      title: 'Frog',
      img: frog,
      desc: 'Frogs absorb water through their skin instead of drinking it!',
    },
    Salamander: {
      title: 'Salamander',
      img: salamander,
      desc: 'Some salamanders can regrow lost limbs and even parts of their heart and brain!',
    },
    Newt: {
      title: 'Newt',
      img: newt,
      desc: 'Newts are amphibians with lizard-like bodies and can regenerate limbs and organs!',
    },
  },
  Reptile: {
    Snake: {
      title: 'Snake',
      img: snake,
      desc: 'Snakes “taste” the air by flicking their tongues and analyzing scents with their Jacobson’s organ.',
    },
    Lizard: {
      title: 'Lizard',
      img: lizard,
      desc: 'Some lizards can detach their tails to escape predators and grow them back later.',
    },
    Turtle: {
      title: 'Turtle',
      img: turtle,
      desc: 'Turtles have been around for over 200 million years — they lived alongside dinosaurs!',
    },
  },
  Bird: {
    Eagle: {
      title: 'Eagle',
      img: eagle,
      desc: 'Eagles can see up to 8 times farther than humans, spotting prey from miles away.',
    },
    Parrot: {
      title: 'Parrot',
      img: parrot,
      desc: 'Parrots are great mimics and can learn to imitate human speech.',
    },
    Penguin: {
      title: 'Penguin',
      img: penguin,
      desc: 'Penguins propose to their mates by giving them a special pebble as a gift.',
    },
  },
  Mammal: {
    Cow: {
      title: 'Cow',
      img: cow,
      desc: 'Cows have best friends and can get stressed when separated from them!',
    },
    Elephant: {
      title: 'Elephant',
      img: elephant,
      desc: 'Elephants can recognize themselves in mirrors — a sign of high intelligence.',
    },
    Cat: {
      title: 'Cat',
      img: cat,
      desc: 'Cats have a unique “vocabulary” of meows they use just to communicate with humans.',
    },
  },
  Insect: {
    Ant: {
      title: 'Ant',
      img: ant,
      desc: 'Some ants can create living bridges using their own bodies to cross gaps.',
    },
    Butterfly: {
      title: 'Butterfly',
      img: butterfly,
      desc: 'Butterflies taste with their feet to find the best leaves for their caterpillars.',
    },
    Bee: {
      title: 'Bee',
      img: bee,
      desc: 'Honeybees communicate with a special “waggle dance” to tell others where to find flowers.',
    },
  },
  Arachnid: {
    Spider: {
      title: 'Spider',
      img: spider,
      desc: 'Some spiders can “fly” by releasing silk threads that catch the wind — called ballooning.',
    },
    Scorpion: {
      title: 'Scorpion',
      img: scorpion,
      desc: 'Scorpions can survive without food for up to a year by slowing their metabolism.',
    },
    Tick: {
      title: 'Tick',
      img: tick,
      desc: 'Ticks can detect hosts by sensing carbon dioxide and body heat from miles away.',
    },
  },
  Crustacean: {
    Crab: {
      title: 'Crab',
      img: crab,
      desc: 'Some crabs can walk sideways faster than they can walk forward!',
    },
    Lobster: {
      title: 'Lobster',
      img: lobster,
      desc: 'Lobsters can live up to 50 years and continue growing throughout their life.',
    },
    Shrimp: {
      title: 'Shrimp',
      img: shrimp,
      desc: 'Some shrimp create snapping sounds that can stun their prey underwater.',
    },
  },
  Mollusk: {
    Snail: {
      title: 'Snail',
      img: snail,
      desc: 'Some snails can sleep for up to 3 years if conditions are not favorable.',
    },
    Octopus: {
      title: 'Octopus',
      img: octopus,
      desc: 'Octopuses have three hearts and can change color instantly to camouflage.',
    },
    Squid: {
      title: 'Squid',
      img: squid,
      desc: 'Squids can shoot ink to confuse predators and escape danger.',
    },
  },
  Annelid: {
    Earthworm: {
      title: 'Earthworm',
      img: earthworm,
      desc: 'Earthworms have five hearts and help improve soil health by aerating it.',
    },
    Leech: {
      title: 'Leech',
      img: leech,
      desc: 'Leeches have been used for medicinal purposes for thousands of years.',
    },
    Polychaete: {
      title: 'Polychaete',
      img: polychaete,
      desc: 'Polychaetes have bristles that help them swim and crawl through sediments.',
    },
  },
};
