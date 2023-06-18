import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { srcery } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../assets/css/Cards.css";

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
      code: `print('Hello, world!')
print('This is Python code.')
x = 5
y = 10
print(x + y)
if x > y:
  print('x is greater than y')
else:
  print('y is greater than x')`,
      info: "I started using python not that long ago, I have built multiple projects in python",
    },
    {
      title: "HTML",
      code: `<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome to my website!</h1>
    <p>This is a paragraph.</p>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  </body>
</html>`,
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
      code: `async function getZones(): {
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
      code: "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.",
      info: "I started using typescript not that long ago, I have built multiple projects in typescript",
    },
  ];

  return (
    <section className="languages">
      <div className="langcardsWrapper">
        <div className="cardWrapper">
          {langCards.map((card, index) => (
            <div
              key={index}
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
        </div>
        {/* <div className="textWrapper">
          {langCards.map((card, index) => (
            <div
              key={index}
              className={`card glass-light ${card.title.toLowerCase()}`}
              data-active={currentCard === index ? "true" : "false"}
            >
              <h4>{card.title}</h4>
              <p>{card.info}</p>
              <div className="shadow"></div>
            </div>
          ))}
        </div> */}
        <button className="next glass-light" onClick={cycleForwards}>
          {">"}
        </button>
        <button className="prev glass-light" onClick={cycleBackwards}>
          {"<"}
        </button>
      </div>
    </section>
  );
};

function getCardActive(
  currentCard: number,
  index: number,
  langCards: { title: string; code: string }[]
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