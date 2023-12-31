import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { srcery } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../assets/css/Cards.css";
import ReactMarkdown from "react-markdown";

interface LanguageCardProps {
  card: { title: string; code: string; info: string };
  currentCard: number;
  index: number;
  langCards: { title: string; code: string; info: string }[];
}

export const Langcards = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cycleForwards = () => {
    setCurrentCard((currentCard - 1 + langCards.length) % langCards.length);
  };

  const cycleBackwards = () => {
    setCurrentCard((currentCard + 1) % langCards.length);
  };

  const langCards = [
    {
      title: "Python",
      code: `def loopInput(inp: str, options: list[str], autocorrect: bool = False, cutoff: int = 3) -> str:
while True:
  inp = input(inp).lower()
  if autocorrect:
    lowest = [False, 0]
    for i in options:
      if len(i) > lowest[1]:
        lowest[1] = len(i)

    for option in options:
      distances = [[0 for _ in range(len(option) + 1)] for _ in range(len(inp) + 1)]
      for t1 in range(len(inp) + 1):
        distances[t1][0] = t1
      for t2 in range(len(option) + 1):
        distances[0][t2] = t2

      for t1 in range(1, len(inp) + 1): 
          if inp[t1-1] == option[t2-1]:
            distances[t1][t2] = distances[t1 - 1][t2 - 1]
          else:
            a = distances[t1][t2 - 1]
            b = distances[t1 - 1][t2]
            c = distances[t1 - 1][t2 - 1]

            if a <= b and a <= c:
              distances[t1][t2] = a + 1
            elif b <= a and b <= c:
              distances[t1][t2] = b + 1
            else:
              distances[t1][t2] = c + 1

      distance = distances[len(inp)][len(option)]

      if distance < lowest[1] and distance <= cutoff:
        lowest[0] = option
        lowest[1] = distance

    if lowest[0] == False:
      print(f"Choice must be: {', '.join(options[:-1])} or {options[-1]}")
    else:
      return lowest[0]
  else:
    if inp in options:
      return inp
    else:
      print(f"Choice must be: {', '.join(options[:-1])} or {options[-1]}")`,
      info: `I began learning Python in 2018 by creating my own Discord bot, sparking my passion for programming.
      
Over the years, I've completed various projects, including:
- Databases
- Discord Bots
- Web Interfaces
- Executables
- Machine Learning

Notable projects include
- VoiceMeeter Fix: A program that automates settings adjustments
- cheekyutils: A PyPi package for efficient user inputs
- png2ico: A tool for converting images to .ico files.

Since 2018, I've made significant progress in my Python skills and look forward to future projects.`,
    },
    {
      title: "HTML",
      code: `<link rel="stylesheet" href="/css/cards.css" />
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<section class="cards-container">
  <div class="card loading-card">
        <div class="loading" data-loading="true"></div>
        <div class="loader"></div>
    <img src="/images/cg.webp" alt="Coleg Gwent Logo" />
    <div class="info">
      <div class="points">
        <h2>Points</h2>
        <h3 id="cgp">LOADING</h3>
      </div>
      <div class="pos">
        <h2>Position</h2>
        <h3 id="cgpos">LOADING</h3>
      </div>
    </div>
  </div>
  <div class="card loading-card">
        <div class="loading" data-loading="true"></div>
        <div class="loader"></div>
    <div id="chart-container"><canvas id="chart" data-loading="true"></canvas></div>
    <h2 id="winning">LOADING Is Winning By LOADING Points</h2>
  </div>
  <div class="card loading-card">
        <div class="loading" data-loading="true"></div>
        <div class="loader"></div>
    <img src="/images/bc.webp" alt="Bridgend College Logo" />
    <div class="info">
      <div class="points">
        <h2>Points</h2>
        <h3 id="bcp">LOADING</h3>
      </div>
      <div class="pos">
        <h2>Position</h2>
        <h3 id="bcpos">LOADING</h3>
      </div>
    </div>
  </div>
</section>`,
      info: `I started learning HTML in 2020, I never did any projects with it because I did not understand much, or how to use CSS.

Once I started college my HTML really started to pick up, I made fun test websites and learned about different HTML tags.

I have made and published a few websites since.

- [cheekysim.com](https://cheekysim.com "cheekysim.com")
- [Immersive Labs Stats](https://ils.cheekysim.com "ils.cheekysim.com")

I have also done plenty of experiments that have not been published.`,
    },
    {
      title: "CSS",
      code: `.glass-dark {
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
  background-color: hsla(0, 0%, 0%, 0.3);
  box-shadow: 0px 0px 1rem 0.5rem hsla(0, 0%, 0%, 0.5);
}

.glass-light {
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
  background-color: hsla(0, 0%, 0%, 0.1);
  box-shadow: 0px 0px 1rem 0.5rem hsla(0, 0%, 0%, 0.3);
}

.langcardsWrapper .cardWrapper .card {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  aspect-ratio: 5/3;
  width: 30vw;
  height: auto;
  overflow: hidden;
  border-radius: 1rem;
  transition: all 0.3s ease;
}`,
      info: `I started learning CSS along with HTML in 2020. At first, it felt a bit confusing, especially since I didn't get how CSS worked with HTML. But things changed when I got to college. CSS started making more sense, and I started creating fun test websites to play around with different styles.

I didn't stop at theory. I actually made and shared a bunch of websites to put my CSS skills to the test:

- [cheekysim.com](https://cheekysim.com "cheekysim.com")
- [Immersive Labs Stats](https://ils.cheekysim.com "ils.cheekysim.com")

I've got quite a few experiments under my belt that I haven't shared yet. These behind-the-scenes projects helped me enhance my CSS and make websites that look more interesting and unique.

Keep an eye out for more updates as I keep growing my CSS skills.`,
    },
    {
      title: "JavaScript",
      code: `async function getZones() {
    const options = {
        method: "GET",
        url: \`https://api.cloudflare.com/client/v4/zones\`,
        headers: {
            "Content-Type": "application/json",
            Authorization: \`Bearer \${process.env.TOKEN}\`,
        },
    };
    const { data } = await axios.request(options);
    return data.result;
}

async function getDnsRecords(zoneId): {
    const options = {
        method: "GET",
        url: \`https://api.cloudflare.com/client/v4/zones/\${zoneId}/dns_records\`,
        headers: {
            "Content-Type": "application/json",
            Authorization: \`Bearer \${process.env.TOKEN}\`,
        },
    };
    const { data } = await axios.request(options);
    return data.result;
}`,
      info: `My journey into JavaScript began during my college years in 2021, marking a transition from Python to this dynamic scripting language. This transition was like unlocking a new world of possibilities. JavaScript's ability to bring websites to life fascinated me, and I quickly immersed myself in its intricacies.

Shifting from Python to JavaScript was transformative. I grasped concepts like variables, loops, and functions, which soon translated into projects that showcased my newfound skills. What's more, I didn't stop at the basics. I ventured into Node.js, a runtime environment that extended JavaScript's capabilities beyond the browser.

With Node.js, I could build not only client-side applications but also server-side applications. I harnessed tools like Express.js to craft efficient and powerful backends, adding a new dimension to my skill set. This newfound knowledge enabled me to create full-stack applications that seamlessly integrated front-end and back-end functionalities.

Here are a few highlights of my JavaScript journey:

- Building interactive features for [cheekysim.com](https://cheekysim.com "cheekysim.com") and related projects.
- Exploring Node.js and Express.js to construct robust server-side components.
- Crafting client-side applications that deliver dynamic user experiences.

As I continue on this path, I eagerly anticipate further exploration of JavaScript, Node.js, and their combined potential to shape the future of web development.`,
    },
    {
      title: "TypeScript",
      code: `await Promise.all(
  formattedShifts.map(async (shift: Shift) => {
    // Check if shift already exists
    const shifts = await db.read(shift.id, { date: shift.date });
    // If shift doesn't exist, write it
    if (shifts.length === 0) {
      console.log(\`Shift: \${shift.id} \${shift.date} doesn't exist\`);
      return await db.write(shift.id, shift);
    } else {
      // If shift exists, update it
      shifts.forEach(async (dbshift) => {
        if (
          dbshift.start === shift.start &&
          dbshift.end === shift.end &&
          dbshift.confirmed === shift.confirmed
        )
          return;
        const update = {
          $set: {
            start: shift.start,
            end: shift.end,
            hours: shift.hours,
            paid_hours: shift.paid_hours,
            unpaid_hours: shift.unpaid_hours,
            confirmed: shift.confirmed,
          },
        };
        return await db.update(shift.id, { date: shift.date }, update);
      });
    }
  })
);`,
      info: `In my second year of college, I stumbled upon TypeScript, and it transformed the way I approached web development. Once I got a taste of TypeScript's structured nature and enhanced tooling, there was no turning back.

My initial exploration of TypeScript felt like leveling up. The strong typing system provided a safety net, catching errors before they even happened. This meant my projects were not only more robust but also easier to manage as they grew in complexity.

From that point forward, TypeScript became my go-to language for web development. I rewired my approach, converting JavaScript projects into TypeScript-powered ones. This shift not only improved the quality of my code but also increased my development speed. TypeScript's support for modern JavaScript features and additional type annotations allowed me to create clearer, more maintainable codebases.

As I embraced TypeScript, my skills expanded even further:

All my projects, including [cheekysim.com](https://cheekysim.com "cheekysim.com") and related endeavors, were built using TypeScript.
I ventured into creating custom type definitions to ensure consistency and improve collaboration.
The structured nature of TypeScript encouraged me to dive deeper into software design principles.
My journey with TypeScript is ongoing, and I'm excited to keep exploring its capabilities, leveraging its type system to build powerful and efficient web applications.`,
    },
  ];

  return (
    <section className="languages">
      <div className="langcardsWrapper">
        <div className="cardWrapper">
          {langCards.map((card, index) => (
            <div
              key={`${card.title}-card`}
              className={`card glass-light ${card.title.toLowerCase()}`}
              data-active={getCardActive(currentCard, index, langCards)}
            >
              <h4>{card.title}</h4>
              <SyntaxHighlighter
                language={card.title.toLowerCase()}
                style={srcery}
                customStyle={{
                  backgroundColor: "transparent",
                }}
              >
                {card.code}
              </SyntaxHighlighter>
              <div className="shadow"></div>
            </div>
          ))}
          <button className="prev glass-light" onClick={cycleBackwards}>
            {"<"}
          </button>
          <button className="next glass-light" onClick={cycleForwards}>
            {">"}
          </button>
        </div>
        <div className="textWrapper">
          {langCards.map((card, index) => (
            <LanguageCard
              key={`${card.title}-text`}
              card={card}
              currentCard={currentCard}
              index={index}
              langCards={langCards}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function LanguageCard({
  card,
  currentCard,
  index,
  langCards,
}: LanguageCardProps) {
  return (
    <div
      key={index}
      className={`card glass-light ${card.title.toLowerCase()}`}
      data-active={getActiveText(currentCard, index, langCards)}
    >
      <h4>{card.title}</h4>
      <div className="content">
        <ReactMarkdown children={card.info} />
      </div>
    </div>
  );
}

function getCardActive(
  currentCard: number,
  index: number,
  langCards: { title: string; code: string; info: string }[]
) {
  return (() => {
    switch ((currentCard + index) % langCards.length) {
      case 0:
        return "current";
      case 1:
        return "second";
      case 2:
        return "third";
      case 3:
        return "false";
      default:
        return "prefalse";
    }
  })();
}

function getActiveText(
  currentCard: number,
  index: number,
  langCards: { title: string; code: string; info: string }[]
) {
  return (() => {
    switch ((currentCard + index) % langCards.length) {
      case 0:
        return "current";
      case 1:
        return "next";
      default:
        return "prev";
    }
  })();
}
