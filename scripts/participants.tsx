import { render, type ComponentChild } from "preact";
import { useEffect, useState } from "preact/hooks";
import "./participants.css";

type Profile = {
  github?: string; // e.g. "https://github.com/coderbyheart";
  homepage?: string; // e.g. "https://coderbyheart.com/";
  linkedin?: string; // e.g. "https://www.linkedin.com/in/markustacker";
  mastodon?: string; // e.g. "https://chaos.social/@coderbyheart";
  matrix?: string; // e.g. "https://matrix.to/#/@coderbyheart:matrix.im";
  name: string; // e.g. "Markus Tacker";
  photoThumbnail?: string; // e.g. "https://registration-publicprofilesimagesbucket90c8355a-uuyo0xqh3eeu.s3.eu-north-1.amazonaws.com/ad812ca2-8fd4-4d99-b9c3-b7079303defa.webp";
  pronouns?: string; // e.g. "he/him";
};

const Participants = () => {
  const [profiles, setProfiles] = useState<Array<Profile>>([]);

  useEffect(() => {
    fetch(
      "https://ruj56hpsooydu4jmctx5u7gdra0mbszw.lambda-url.eu-north-1.on.aws/?codefreeze=2026"
    )
      .then<Array<Profile>>((res) => res.json())
      .then((participants) => {
        setProfiles(participants.sort(
          (a, b) => a.name.localeCompare(b.name)
        ))
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {profiles.map((p) => (
        <Participant profile={p} />
      ))}
    </>
  );
};

const Participant = ({ profile }: { profile: Profile }) => (
  <div class='participant'>
    {(<img class='avatar' src={profile.photoThumbnail ?? '/images/avatar.jpg'} alt={profile.name} />)}
    <h3>{profile.name}
      {profile.pronouns && <small><br />{profile.pronouns}</small>}
    </h3>
    <nav>
      {profile.homepage && <ProfileLink icon={<i class="fas fa-home"></i>} href={profile.homepage} title={`Homepage of ${profile.name}`} />}
      {profile.linkedin && <ProfileLink icon={<i class="fab fa-linkedin"></i>} href={profile.linkedin} title={`${profile.name}'s LinkedIn profile`} />}
      {profile.mastodon && <ProfileLink icon={<img src="/logos/mastodon.svg" alt="mastodon" class="icon" />} href={profile.mastodon} title={`${profile.name} on Mastodon`} />}
      {profile.matrix && <ProfileLink icon={<img src="/logos/matrix.svg" alt="matrix" class="icon" />} href={profile.matrix} title={`${profile.name} on Matrix`} />}
      {profile.github && <ProfileLink icon={<i class="fab fa-github"></i>} href={profile.github} title={`${profile.name} on GitHub`} />}
    </nav>
  </div>
);

const ProfileLink = ({ href, title, icon }: { href: string, title: string, icon: ComponentChild }) => <a href={href} target={'_blank'} rel="noopener noreferrer" title={title}>{icon}</a>

render(
  <Participants />,
  document.getElementById("participants-container") as HTMLDivElement
);
