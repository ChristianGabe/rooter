import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import "./components/style.css";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 502356,
      title: "The Super Mario Bros.Movie",
      description:
        "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      video: "https://www.youtube.com/embed/GCW0KFA-yAM",
    
    },
    {
      id: 640146,
      title: "Ant-Man and the Wasp: Quantumania",
      description:
        "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
      video: "https://www.youtube.com/embed/8xFTjxlAsvw",
    
    },
    {
      id: 713704,
      title: "Evil Dead Rise",
      description:
        "Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
      video: "https://www.youtube.com/embed/o9EgRiykxv4",
    
    },
    {
      id: 758323,
      title: "The Pope's Exorcist",
      description:
        "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
      video: "https://www.youtube.com/embed/S1PIQtdjlKg",
    
    },
    {
      id: 447365,
      title: "Guardians of Galaxy Vol.3",
      description:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      video: "https://www.youtube.com/embed/bT4APPIcGcU",
    
    },
    {
      id: 868759,
      title: "Ghosted",
      description:
        "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
      video: "https://www.youtube.com/embed/5ZTRqKXrIcc",
     
    },
    {
      id: 594767,
      title: "Shazam! Fury of the Gods",
      description:
        "Billy Batson and his foster siblings, who transform into superheroes by saying Shazam!, are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
      video: "https://www.youtube.com/embed/VM5Hz-csjt8",
    
    },
    {
      id: 76600,
      title: "Avatar:The Way of Water",
      description:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      video: "https://www.youtube.com/embed/V_pb0BT2USk",
    
    },
    {
      id: 1102776,
      title: "AKA",
      description:
        "A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.",
      video: "https://www.youtube.com/embed/KzsUj_BUqHY",
     
    }, {
      id: 677179,
      title: "Creed 3",
      description:
        "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter who has nothing to lose.",
      video: "https://www.youtube.com/embed/D_avHhjjmtU",
    
    },
    {
      id: 245891,
      title: "John Wick",
      description:
        "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
      video: "https://www.youtube.com/embed/Cs4wKxXjkc8",
    
    },
    {
      id: 228150,
      title: "Fury",
      description:
        "In the last months of World War II, as the Allies make their final push in the European theatre, a battle-hardened U.S. Army sergeant named 'Wardaddy' commands a Sherman tank called 'Fury' and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
      video: "https://www.youtube.com/embed/PJTkKIxNJAg",
     
    }, {
      id: 156022,
      title: "The Equalizer",
      description:
        "McCall believes he has put his mysterious past behind him and dedicated himself to beginning a new, quiet life. But when he meets Teri, a young girl under the control of ultra-violent Russian gangsters, he can’t stand idly by – he has to help her. Armed with hidden skills that allow him to serve vengeance against anyone who would brutalize the helpless, McCall comes out of his self-imposed ",
      video: "https://www.youtube.com/embed/2L0ibmBgFV8",
    
    },
    {
      id: 244786,
      title: "Whiplash",
      description:
        "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
      video: "https://www.youtube.com/embed/yff8XTT3-5o",
    
    },
    {
      id: 210577,
      title: "Gone Girl",
      description:
        "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
      video: "https://www.youtube.com/embed/ItEpaXZ6R_M",
     
    }, {
      id: 250546,
      title: "Annabelle",
      description:
        "A couple begins to experience terrifying supernatural occurrences involving a vintage doll shortly after their home is invaded by satanic cultists.",
      video: "https://www.youtube.com/embed/4N_uO1UokPg",
    
    },
    {
      id: 228326,
      title: "The Book of Life",
      description:
        "The journey of Manolo, a young man who is torn between fulfilling the expectations of his family and following his heart. Before choosing which path to follow, he embarks on an incredible adventure that spans three fantastical worlds where he must face his greatest fears.",
      video: "https://www.youtube.com/embed/bYvv02obI5U",
    
    },
    {
      id: 194662,
      title: "Birdman or (The Unexpected Virtue of Ignorance)",
      description:
        "A fading actor best known for his portrayal of a popular superhero attempts to mount a comeback by appearing in a Broadway play. As opening night approaches, his attempts to become more altruistic, rebuild his career, and reconnect with friends and family prove more difficult than expected.",
      video: "https://www.youtube.com/embed/jU-02YmPpMs",
     
    },
    {
      id: 169917,
      title: "A Walk Among the Tombstones",
      description:
        "Private investigator Matthew Scudder is hired by a drug kingpin to find out who kidnapped and murdered his wife.",
      video: "https://www.youtube.com/embed/2vSeNh3RLco",
    
    },
    {
      id: 200727,
      title: "Love,Rosie",
      description:
        "Since the moment they met at age 5, Rosie and Alex have been best friends, facing the highs and lows of growing up side by side. A fleeting shared moment, one missed opportunity, and the decisions that follow send their lives in completely different directions. As each navigates the complexities of life, love, and everything in between, they always find their way back to each other - but is it just friendship, or something more?",
      video: "https://www.youtube.com/embed/oFFnfnOySqM",
    
    },
    {
      id: 842675,
      title: "The Wandering Earth 2",
      description:
        "A prequel to The Wandering Earth.",
      video: "https://www.youtube.com/embed/Yf3VreXwVpI",
     
    },
    {
      id: 980078,
      title: "Winnie the Pooh:Blood and Honey",
      description:
        "Christopher Robin is headed off to college and he has abandoned his old friends, Pooh and Piglet, which then leads to the duo embracing their inner monsters.",
      video: "https://www.youtube.com/embed/5MYLMKY0lqM",
    
    },
    {
      id: 536554,
      title: "M3GAN",
      description:
        "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
      video: "https://www.youtube.com/embed/kIlqOrf3mK8",
    
    },
    {
      id: 983282,
      title: "The Artifice Girl",
      description:
        "A team of special agents discovers a revolutionary new computer program to bait and trap online predators. After teaming up with the program's troubled developer, they soon find that the AI is rapidly advancing beyond its original purpose.",
      video: "https://www.youtube.com/embed/sD93H7FwHJI",
     
    }, {
      id: 265712,
      title: "Stand by Me Dorameon",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      video: "https://www.youtube.com/embed/ZDKXotjX9ok",
    
    },
    {
      id: 585511,
      title: "Luck",
      description:
        "Suddenly finding herself in the never-before-seen Land of Luck, the unluckiest person in the world must unite with the magical creatures there to turn her luck around.",
      video: "https://www.youtube.com/embed/u2NOwM5ra3I",
    
    },
    {
      id: 663712,
      title: "Terrifer 2",
      description:
        "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
      video: "https://www.youtube.com/embed/i9tZKEFl6cc",
     
    }, {
      id: 772515,
      title: "Huesera: The Bone Woman",
      description:
        "Valeria's joy at becoming a first-time mother is quickly taken away when she's cursed by a sinister entity. As danger closes in, she's forced deeper into a chilling world of dark magic that threatens to consume her.",
      video: "https://www.youtube.com/embed/Yupd1vBO8FA",
    
    },
    {
      id: 10144,
      title: "The Little Mermaid",
      description:
        "This colorful adventure tells the story of an impetuous mermaid princess named Ariel who falls in love with the very human Prince Eric and puts everything on the line for the chance to be with him. Memorable songs and characters -- including the villainous sea witch Ursula.",
      video: "https://www.youtube.com/embed/J5VvzJmiqJc",
    
    },
    {
      id: 792775,
      title: "Cop Secret",
      description:
        "When Bússi, Iceland's toughest cop, is forced to work with a new partner to solve a series of bank robberies, the pressure to close the case as soon as possible proves too much for him.",
      video: "https://www.youtube.com/embed/F-m5Bi_HphE",
     
    }, {
      id: 157336,
      title: "Interstellar",
      description:
        "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      video:"https://www.youtube.com/embed/HsPP6xSzQoE",
    
    },
    {
      id: 124905,
      title: "Godzilla",
      description:
        "Ford Brody, a Navy bomb expert, has just reunited with his family in San Francisco when he is forced to go to Japan to help his estranged father, Joe. Soon, both men are swept up in an escalating crisis when an ancient alpha predator arises from the sea to combat malevolent adversaries that threaten the survival of humanity. The creatures leave colossal destruction in their wake, as they make their way toward their final battleground: San Francisco.",
      video: "https://www.youtube.com/embed/rUYFJJqXLLM",
    
    },
    {
      id: 147441,
      title: "Exodus:Gods and Kings",
      description:
        "The defiant leader Moses rises up against the Egyptian Pharaoh Ramses, setting 400,000 slaves on a monumental journey of escape from Egypt and its terrifying cycle of deadly plagues.",
      video: "https://www.youtube.com/embed/aJ9O6_HHm-8",
     
    },
    {
      id: 242582,
      title: "Nightcrawler",
      description:
        "When Lou Bloom, desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story. Aiding him in his effort is Nina, a TV-news veteran.",
      video: "https://www.youtube.com/embed/gLqCKR3FeMs",
    
    },
    {
      id: 136797,
      title: "Need for speed",
      description:
        "The film revolves around a local street-racer who partners with a rich and arrogant business associate, only to find himself framed by his colleague and sent to prison. After he gets out, he joins a New York-to-Los Angeles race to get revenge. But when the ex-partner learns of the scheme, he puts a massive bounty on the racer's head, forcing him to run a cross-country gauntlet of illegal racers in all manner of supercharged vehicles.",
      video: "https://www.youtube.com/embed/HJ55mkopTe4",
     
    }, {
      id: 137106,
      title: "The Lego Movie",
      description:
        "An ordinary Lego mini-figure, mistakenly thought to be the extraordinary MasterBuilder, is recruited to join a quest to stop an evil Lego tyrant from conquering the universe.",
      video: "https://www.youtube.com/embed/NebLEBYigm4",
    
    },
    {
      id: 817,
      title: "AUSTIN Powers: The Spy Who Shagged Me",
      description:
        "When diabolical genius Dr. Evil travels back in time to steal superspy Austin Powers's ‘mojo,’ Austin must return to the swingin' '60s himself - with the help of American agent, Felicity Shagwell - to stop the dastardly plan. Once there, Austin faces off against Dr. Evil's army of minions to try to save the world in his own unbelievably groovy way.",
      video: "https://www.youtube.com/embed/nTyEcDedMjg",
    
    },
    {
      id: 9522,
      title: "Wedding Crashers",
      description:
        "John and his buddy, Jeremy are emotional criminals who know how to use a woman's hopes and dreams for their own carnal gain. Their modus operandi: crashing weddings. Normally, they meet guests who want to toast the romantic day with a random hook-up. But when John meets Claire, he discovers what true love – and heartache – feels like.",
      video: "https://www.youtube.com/embed/IT2pYrB-kIw",
     
    }, {
      id: 10719,
      title: "ELF",
      description:
        "When young Buddy falls into Santa's gift sack on Christmas Eve, he's transported back to the North Pole and raised as a toy-making elf by Santa's helpers. But as he grows into adulthood, he can't shake the nagging feeling that he doesn't belong. Buddy vows to visit Manhattan and find his real dad, a workaholic publisher.",
      video: "https://www.youtube.com/embed/nALR1JuCPus",
    
    },
    {
      id: 280217,
      title: "The Lego Movie 2: The Second Part",
      description:
        "It's been five years since everything was awesome and the citizens are facing a huge new threat: LEGO DUPLO® invaders from outer space, wrecking everything faster than they can rebuild.",
      video: "https://www.youtube.com/embed/8Mzl5qguets",
    
    },
    {
      id: 419680,
      title: "Daddy's Home 2",
      description:
        "Brad and Dusty must deal with their intrusive fathers during the holidays.",
      video: "https://www.youtube.com/embed/a7DYkhriBH0",
    },
  ]);

  return (
    <Routes>
      <Route path="/" element={<Home data={movies} />} />
      <Route path="/movie/:id" element={<MovieDetails data={movies} />} />
    </Routes>
  );
}

export default App;
