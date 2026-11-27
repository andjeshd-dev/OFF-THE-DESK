// ===== АСУУЛТУУД =====
// Асуулт нэмэх бол доорх жагсаалтад шинэ мөр нэмнэ.
// links: [ "Дууны нэр", ... ]  -> YouTube хайлтын линк болно.
const questions = [
  { q: "Та ямар төрлийн хөгжим түлхүү сонсдог вэ?", links: ["K-POP", "Hip-hop", "R&B"] },
  { q: "Таны хамгийн дуртай 3 уран бүтээлч хэн бэ?", links: ["2NE1", "Blackpink"] },
  { q: "Таны хамгийн олон удаа сонсдог дуу юу вэ?", links: ["2NE1 Goodbye", "Blackpink Stay"] },
  { q: "Таны дуртай бүх цагийн дуу юу вэ?", links: ["Rokit Bay Bid 2"] },
  { q: "Сүүлийн үед хамгийн их давтаж сонссон дуу юу вэ?", links: ["Adela Ain't In LA"] },
  { q: "Таны шинэ жилийн хамгийн дуртай дуу ямар вэ?", links: ["Mariah Carey All I Want for Christmas Is You"] }
];

const list = document.getElementById("questions");
questions.forEach(item => {
  const li = document.createElement("li");
  li.append(item.q + " – ");
  item.links.forEach((name, i) => {
    const a = document.createElement("a");
    a.textContent = name;
    a.href = "https://www.youtube.com/results?search_query=" + encodeURIComponent(name);
    a.target = "_blank";
    a.rel = "noopener";
    li.append(a);
    if (i < item.links.length - 1) li.append(", ");
  });
  list.append(li);
});

// ===== ЦАС =====
const snow = document.getElementById("snow");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  for (let i = 0; i < 40; i++) {
    const f = document.createElement("div");
    f.className = "flake";
    f.textContent = "❄";
    f.style.left = Math.random() * 100 + "vw";
    f.style.fontSize = 8 + Math.random() * 14 + "px";
    f.style.animationDuration = 6 + Math.random() * 8 + "s";
    f.style.animationDelay = -Math.random() * 10 + "s";
    snow.append(f);
  }
}
