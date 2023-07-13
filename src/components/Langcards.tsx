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
      info: "I started using HTML not that long ago, I have built multiple projects in HTML",
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
      info: "I started using css not that long ago, I have built multiple projects in css",
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
      info: "I started using javascript not that long ago, I have built multiple projects in javascript",
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
      info: "I started using typescript not that long ago, I have built multiple projects in typescript",
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
