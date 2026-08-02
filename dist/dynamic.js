import { i as e, n as t, r as n, t as r } from "./jsxRuntime.module-C4ESoj_a.js";
//#region scripts/status.tsx
var i = () => {
	let [e, i] = t([]);
	return n(() => {
		fetch("/status.json").then((e) => e.json()).then((e) => {
			let t = e.map(({ media: e, content: t }) => (e ?? []).map((e) => ({
				filename: e,
				content: t
			}))).flat().filter((e) => !e.filename.endsWith("mp4")).sort(() => Math.random() > .5 ? 1 : -1).slice(0, 10);
			i(t);
		}).catch(console.error);
	}, []), /* @__PURE__ */ r("div", {
		class: "gallery",
		children: e.map((e) => /* @__PURE__ */ r(a, {
			filename: e.filename,
			content: e.content
		}))
	});
}, a = ({ filename: e, content: t }) => /* @__PURE__ */ r("div", {
	style: { backgroundImage: `url(/images/status/thumb-500-${e})` },
	children: /* @__PURE__ */ r("div", {
		class: "content",
		dangerouslySetInnerHTML: { __html: t }
	})
});
e(/* @__PURE__ */ r(i, {}), document.getElementById("status"));
//#endregion
