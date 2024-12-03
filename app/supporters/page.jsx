import { BtnIcon } from "../components/buttons";
import IconCoffee from "../assets/icons/Coffee";
import IconGithub from "../assets/icons/GitHub";

// Dummy Data
const data = {
  supporters: [
    {
      support_id: 1,
      payer_name: "John Doe",
      support_coffees: 3,
      support_note: "Great work!",
      support_created_on: "2023-12-01",
    },
    {
      support_id: 2,
      payer_name: "John Doe",
      support_coffees: 3,
      support_note:
        "Great work! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      support_created_on: "2023-12-01",
    },
    {
      support_id: 3,
      payer_name: "John Doe",
      support_coffees: 3,
      support_note: "Great work!",
      support_created_on: "2023-12-01",
    },
    {
      support_id: 4,
      payer_name: "John Doe",
      support_coffees: 3,
      support_note: "Great work!",
      support_created_on: "2023-12-01",
    },
    {
      support_id: 5,
      payer_name: "John Doe",
      support_coffees: 3,
      support_note:
        "Great work! Lorem ipsum dolor sit amet, consectetur adipiscing elit.Great work! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      support_created_on: "2023-12-01",
    },
    {
      support_id: 6,
      payer_name: "John Doe",
      support_coffees: 3,
      support_note: "Great work!",
      support_created_on: "2023-12-01",
    },
  ],
  subscribers: [
    {
      subscription_id: 1,
      payer_name: "Jane Smith",
      subscription_coffee_num: 5,
      subscription_message: "Love this project!",
      subscription_created_on: "2023-12-02",
    },
    {
      subscription_id: 2,
      payer_name: "Jane Smith",
      subscription_coffee_num: 5,
      subscription_message:
        "Great work! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      subscription_created_on: "2023-12-02",
    },
    {
      subscription_id: 3,
      payer_name: "Jane Smith",
      subscription_coffee_num: 5,
      subscription_message: "Love this project!",
      subscription_created_on: "2023-12-02",
    },
    {
      subscription_id: 4,
      payer_name: "Jane Smith",
      subscription_coffee_num: 5,
      subscription_message: "Love this project!",
      subscription_created_on: "2023-12-02",
    },
    {
      subscription_id: 5,
      payer_name: "Jane Smith",
      subscription_coffee_num: 5,
      subscription_message:
        "Great work! Lorem ipsum dolor sit amet, consectetur adipiscing elit.Great work! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      subscription_created_on: "2023-12-02",
    },
    {
      subscription_id: 6,
      payer_name: "Jane Smith",
      subscription_coffee_num: 5,
      subscription_message: "Love this project!",
      subscription_created_on: "2023-12-02",
    },
  ],
};

const { supporters, subscribers } = data;

const nameStyle = "text-2xl font-medium";
const coffeeStyle = "text-s font-mono text-green-500";
const dateStyle = "text-xs font-mono text-neutral-500";
const cardStyle =
  "flex flex-col gap-1 p-4 rounded-lg bg-neutral-950 border border-neutral-800 hoverDropShadow transition ease-in-out duration-200 hover:scale-101";

function SupportersSection({ supporters }) {
  return (
    <section>
      <h2>Caffeine Addiction Supporters</h2>
      <div className="grid grid-cols-3 gap-5">
        {supporters.map((supporter) => (
          <div key={supporter.support_id} className={cardStyle}>
            <h4 className={nameStyle}>{supporter.payer_name || "Anonymous"}</h4>
            <p className={coffeeStyle}>{supporter.support_coffees} Coffees</p>
            <p>{supporter.support_note || "No message"}</p>
            <p className={dateStyle}>
              Supported on: {supporter.support_created_on}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SubscribersSection({ subscribers }) {
  return (
    <section>
      <h2>Caffeine Addiction Subscribers</h2>
      <div className="grid grid-cols-3 gap-5 w-full">
        {subscribers.map((subscriber) => (
          <div key={subscriber.subscription_id} className={cardStyle}>
            <h4 className={nameStyle}>
              {subscriber.payer_name || "Anonymous"}
            </h4>
            <p className={coffeeStyle}>
              {subscriber.subscription_coffee_num} Coffees
            </p>
            <p>{subscriber.subscription_message || "No message"}</p>
            <p className={dateStyle}>
              Subscribed on: {subscriber.subscription_created_on}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SupportersPage() {
  return (
    <>
      <div className="min-h-svh flex flex-row justify-between pt-nav">
        <div className="supportersContainer flex flex-col mx-auto gap-columnGap items-center">
          <p className="text-center characterLimit">
            Thanks to all of these amazing people I am able to pull development
            nights well into the AMs!
            <br />
            Whether or not that is a good thing is up to you to decide.
          </p>
          <SubscribersSection {...data} />
          <SupportersSection {...data} />
          <section className="flex flex-col items-center gap-4 py-6 px-2 bg-neutral-900 rounded-2xl text-center">
            <p className="characterLimit">
              Want to help support deskthing? Well here you can. DeskThing has
              been developed by Riprod - an independent member of the ThingLabs
              community. Any and all support will go towards the future of
              DeskThing! Whether its in new supplied or some coffee to help burn
              the midnight oil.
            </p>
            <div className="flex flex-row gap-4">
              <BtnIcon
                to="https://buymeacoffee.com/riprod"
                label="Buy Me a Coffee"
                icon={<IconCoffee />}
              />
              <BtnIcon
                to="https://github.com/sponsors/ItsRiprod?o=esb"
                label="Sponsor on Github"
                icon={<IconGithub />}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
