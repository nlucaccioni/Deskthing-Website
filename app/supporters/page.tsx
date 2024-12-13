import { FC } from 'react';
import { BtnIcon } from "../../components/buttons";
import IconCoffee from "../../components/assets/icons/Coffee";
import IconGithub from "../../components/assets/icons/GitHub";

export const metadata: { title: string } = {
  title: 'DeskThing | About',
}

interface Supporter {
  support_id: number;
  payer_name: string;
  support_coffees: number;
  support_note: string;
  support_created_on: string;
}

interface Subscriber {
  subscription_id: number;
  payer_name: string;
  subscription_coffee_num: number;
  subscription_message: string;
  subscription_created_on: string;
}

interface Data {
  supporters: Supporter[];
  subscribers: Subscriber[];
}

const data: Data = {
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

const nameStyle: string = "text-2xl font-medium";
const coffeeStyle: string = "text-s font-mono text-green-500";
const dateStyle: string = "text-xs font-mono text-neutral-500";
const cardStyle: string =
  "flex flex-col gap-1 p-4 rounded-lg bg-neutral-950 border border-neutral-800 hoverDropShadow transition ease-in-out duration-200 hover:scale-101";

interface SupportersSectionProps {
  supporters: Supporter[];
}

const SupportersSection: FC<SupportersSectionProps> = ({ supporters }) => {
  return (
    <section>
      <h2>Caffeine Addiction Supporters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

interface SubscribersSectionProps {
  subscribers: Subscriber[];
}

const SubscribersSection: FC<SubscribersSectionProps> = ({ subscribers }) => {
  return (
    <section>
      <h2>Caffeine Addiction Subscribers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
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

const SupportersPage: FC = () => {
  return (
    <>
      <div className="min-h-svh flex flex-row justify-between pt-nav mx-6 2xl:mx-0">
        <div className="wideContainer flex flex-col mx-auto gap-columnGap items-center">
          <p className="text-center characterLimit text-balance lg:text-wrap">
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
            <div className="flex flex-col sm:flex-row gap-4 items-center">
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

export default SupportersPage;