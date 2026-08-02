import { a as e, i as t, n, r, t as i } from "./jsxRuntime.module-C4ESoj_a.js";
//#region scripts/participants.tsx
var a = () => {
	let [t, a] = n([]);
	return r(() => {
		fetch("https://ruj56hpsooydu4jmctx5u7gdra0mbszw.lambda-url.eu-north-1.on.aws/?codefreeze=2027").then((e) => e.json()).then((e) => {
			a(e.sort((e, t) => e.name.localeCompare(t.name)));
		}).catch(console.error);
	}, []), /* @__PURE__ */ i(e, { children: t.map((e) => /* @__PURE__ */ i(o, { profile: e })) });
}, o = ({ profile: e }) => /* @__PURE__ */ i("div", {
	class: "participant",
	children: [
		/* @__PURE__ */ i("img", {
			class: "avatar",
			src: e.photoThumbnail ?? "/images/avatar.jpg",
			alt: e.name
		}),
		/* @__PURE__ */ i("h3", { children: [e.name, e.pronouns && /* @__PURE__ */ i("small", { children: [/* @__PURE__ */ i("br", {}), e.pronouns] })] }),
		/* @__PURE__ */ i("nav", { children: [
			e.homepage && /* @__PURE__ */ i(s, {
				icon: /* @__PURE__ */ i("i", { class: "fas fa-home" }),
				href: e.homepage,
				title: `Homepage of ${e.name}`
			}),
			e.linkedin && /* @__PURE__ */ i(s, {
				icon: /* @__PURE__ */ i("i", { class: "fab fa-linkedin" }),
				href: e.linkedin,
				title: `${e.name}'s LinkedIn profile`
			}),
			e.mastodon && /* @__PURE__ */ i(s, {
				icon: /* @__PURE__ */ i("img", {
					src: "/logos/mastodon.svg",
					alt: "mastodon",
					class: "icon"
				}),
				href: e.mastodon,
				title: `${e.name} on Mastodon`
			}),
			e.matrix && /* @__PURE__ */ i(s, {
				icon: /* @__PURE__ */ i("img", {
					src: "/logos/matrix.svg",
					alt: "matrix",
					class: "icon"
				}),
				href: e.matrix,
				title: `${e.name} on Matrix`
			}),
			e.github && /* @__PURE__ */ i(s, {
				icon: /* @__PURE__ */ i("i", { class: "fab fa-github" }),
				href: e.github,
				title: `${e.name} on GitHub`
			})
		] })
	]
}), s = ({ href: e, title: t, icon: n }) => /* @__PURE__ */ i("a", {
	href: e,
	target: "_blank",
	rel: "noopener noreferrer",
	title: t,
	children: n
});
t(/* @__PURE__ */ i(a, {}), document.getElementById("participants-container"));
//#endregion
