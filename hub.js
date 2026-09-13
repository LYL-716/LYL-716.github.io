const projects = window.PROJECTS ?? [];
const grid = document.querySelector("#projects-grid");
const emptyFilter = document.querySelector("#empty-filter");
const filterButtons = [...document.querySelectorAll("[data-filter]")];

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderCover(project) {
  if (project.cover) {
    return `
      <div class="project-cover has-image">
        <img src="${escapeHtml(project.cover)}" alt="${escapeHtml(project.coverAlt)}" loading="lazy" />
      </div>`;
  }

  return `
    <div class="project-cover code-cover" aria-label="${escapeHtml(project.coverAlt)}">
      <div class="code-cover-head">
        <span>USART2</span>
        <span>115200</span>
      </div>
      <pre><code>motor_type = 1;
deadzone  = 1900;
encoder   = read();
speed     = control();</code></pre>
      <span class="code-status">BUILD LOG</span>
    </div>`;
}

function renderCard(project) {
  const details = project.details
    .map((detail) => `<li>${escapeHtml(detail)}</li>`)
    .join("");
  const repoLink = project.repo
    ? `
      <a class="repo-link" href="${escapeHtml(project.repo)}" target="_blank" rel="noreferrer">
        上游源码
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 4h6v6M20 4l-9 9M18 13v6H5V6h6" />
        </svg>
      </a>`
    : "";

  return `
    <article class="project-card" data-tags="${escapeHtml(project.tags.join("|"))}">
      <div class="card-number">${escapeHtml(project.number)}</div>
      ${renderCover(project)}
      <div class="project-body">
        <div class="project-meta">
          <span class="status status-${escapeHtml(project.statusType)}">${escapeHtml(project.status)}</span>
          <span>${escapeHtml(project.date)}</span>
        </div>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.description)}</p>
        <ul class="detail-list">${details}</ul>
        <footer class="project-footer">
          <a class="project-link" href="${escapeHtml(project.href)}">
            ${escapeHtml(project.action)}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          ${repoLink}
        </footer>
      </div>
    </article>`;
}

function renderProjects(filter = "全部") {
  const visible = projects.filter((project) => filter === "全部" || project.tags.includes(filter));
  grid.innerHTML = visible.map(renderCard).join("");
  emptyFilter.hidden = visible.length > 0;
}

function updateStats() {
  const published = projects.filter((project) => project.statusType === "published").length;
  const drafts = projects.filter((project) => project.statusType === "draft").length;
  document.querySelector("#project-count").textContent = String(projects.length).padStart(2, "0");
  document.querySelector("#published-count").textContent = String(published).padStart(2, "0");
  document.querySelector("#draft-count").textContent = String(drafts).padStart(2, "0");
  document.querySelector("#last-updated").textContent =
    projects
      .map((project) => project.date)
      .sort()
      .at(-1) ?? "—";
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderProjects(button.dataset.filter);
  });
});

document.querySelector("#footer-year").textContent = new Date().getFullYear();
updateStats();
renderProjects();
