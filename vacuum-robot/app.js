const steps = window.GUIDE_STEPS ?? [];
const storageKey = "vacuum-guide-progress-v1";

const elements = {
  stepList: document.querySelector("#step-list"),
  stepStage: document.querySelector("#step-stage"),
  stepPosition: document.querySelector("#step-position"),
  previousStep: document.querySelector("#previous-step"),
  nextStep: document.querySelector("#next-step"),
  topProgressLabel: document.querySelector("#top-progress-label"),
  topProgressPercent: document.querySelector("#top-progress-percent"),
  topProgressBar: document.querySelector("#top-progress-bar"),
  menuButton: document.querySelector("#menu-button"),
  navScrim: document.querySelector("#nav-scrim"),
  resetProgress: document.querySelector("#reset-progress"),
  startBuild: document.querySelector("#start-build"),
  backToTop: document.querySelector("#back-to-top"),
};

const icons = {
  check: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>`,
  source: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 4h6v6M20 4l-9 9M18 13v6H5V6h6" />
    </svg>`,
  warning: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 2.8 20h18.4L12 3Z" />
      <path d="M12 9v5M12 17.5v.5" />
    </svg>`,
};

const state = {
  activeStep: getStepFromHash() || 1,
  completed: loadCompleted(),
};

function getStepFromHash() {
  const match = window.location.hash.match(/^#step-(\d+)$/);
  if (!match) return null;
  const id = Number(match[1]);
  return steps.some((step) => step.id === id) ? id : null;
}

function loadCompleted() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
    return new Set(Array.isArray(stored) ? stored.filter(Number) : []);
  } catch {
    return new Set();
  }
}

function saveCompleted() {
  localStorage.setItem(storageKey, JSON.stringify([...state.completed]));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getStep(id) {
  return steps.find((step) => step.id === id) ?? steps[0];
}

function renderRail() {
  let currentPhase = "";
  elements.stepList.innerHTML = steps
    .map((step) => {
      const phaseHeading =
        step.phase !== currentPhase
          ? `<p class="phase-label">${escapeHtml((currentPhase = step.phase))}</p>`
          : "";
      const isActive = step.id === state.activeStep;
      const isComplete = state.completed.has(step.id);

      return `
        ${phaseHeading}
        <button
          class="rail-step${isActive ? " is-active" : ""}${isComplete ? " is-complete" : ""}"
          type="button"
          data-step="${step.id}"
          aria-current="${isActive ? "step" : "false"}"
        >
          <span class="rail-number">${String(step.id).padStart(2, "0")}</span>
          <span class="rail-title">${escapeHtml(step.title)}</span>
          <span class="rail-mark">${isComplete ? icons.check : ""}</span>
        </button>`;
    })
    .join("");
}

function renderStep() {
  const step = getStep(state.activeStep);
  const isComplete = state.completed.has(step.id);
  const image = step.image
    ? `
      <figure class="instruction-figure">
        <img
          src="${escapeHtml(step.image)}"
          alt="${escapeHtml(step.title)} 对应制作图片"
          loading="eager"
        />
        <figcaption>
          <span>${String(step.id).padStart(2, "0")}</span>
          <span>${escapeHtml(step.originalTitle ?? step.title)}</span>
        </figcaption>
      </figure>`
    : `
      <div class="no-image-panel">
        <span>${String(step.id).padStart(2, "0")}</span>
        <strong>本步骤以检查和升级为主</strong>
      </div>`;

  const warning = step.warning
    ? `
      <aside class="warning-panel">
        ${icons.warning}
        <div>
          <strong>注意</strong>
          <p>${escapeHtml(step.warning)}</p>
        </div>
      </aside>`
    : "";

  const tasks = step.tasks
    .map(
      (task, index) => `
        <li>
          <span>${String(index + 1).padStart(2, "0")}</span>
          <p>${escapeHtml(task)}</p>
        </li>`,
    )
    .join("");

  elements.stepStage.innerHTML = `
    <article class="step-sheet" aria-labelledby="step-title">
      <header class="step-heading">
        <div class="step-heading-number">${String(step.id).padStart(2, "0")}</div>
        <div>
          <p class="step-phase">${escapeHtml(step.phase)}阶段</p>
          <h2 id="step-title">${escapeHtml(step.title)}</h2>
          <p class="original-title">${escapeHtml(step.originalTitle ?? "")}</p>
        </div>
        <span class="phase-tag">${escapeHtml(step.phase)}</span>
      </header>

      <p class="step-summary">${escapeHtml(step.summary)}</p>

      <div class="step-layout">
        ${image}
        <div class="action-column">
          <div class="action-heading">
            <span>ACTION LIST</span>
            <strong>本步操作</strong>
          </div>
          <ol class="task-list">${tasks}</ol>
          ${warning}
        </div>
      </div>

      <footer class="step-footer">
        <a
          class="text-link"
          href="${escapeHtml(step.sourceUrl ?? "https://www.instructables.com/Build-Your-Own-Vacuum-Robot/")}"
          target="_blank"
          rel="noreferrer"
        >
          查看原始资料
          ${icons.source}
        </a>
        <button
          class="complete-button${isComplete ? " is-complete" : ""}"
          id="complete-step"
          type="button"
          aria-pressed="${isComplete}"
        >
          ${icons.check}
          ${isComplete ? "已完成，取消标记" : "标记本步完成"}
        </button>
      </footer>
    </article>`;

  elements.stepPosition.textContent = `第 ${step.id} / ${steps.length} 步`;
  elements.previousStep.disabled = step.id === 1;
  elements.nextStep.disabled = step.id === steps.length;
  elements.nextStep.innerHTML =
    step.id === steps.length
      ? `完成`
      : `下一步
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>`;
}

function renderProgress() {
  const completed = state.completed.size;
  const percent = Math.round((completed / steps.length) * 100);
  elements.topProgressLabel.textContent = `已完成 ${completed} / ${steps.length}`;
  elements.topProgressPercent.textContent = `${percent}%`;
  elements.topProgressBar.style.transform = `scaleX(${percent / 100})`;
}

function renderAll() {
  renderRail();
  renderStep();
  renderProgress();
}

function setActiveStep(id, options = {}) {
  const nextStep = getStep(id);
  if (!nextStep) return;

  state.activeStep = nextStep.id;
  history.replaceState(null, "", `#step-${nextStep.id}`);
  renderAll();
  closeNavigation();

  if (options.scroll !== false) {
    document.querySelector("#step-stage").scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  }
}

function toggleComplete() {
  if (state.completed.has(state.activeStep)) {
    state.completed.delete(state.activeStep);
  } else {
    state.completed.add(state.activeStep);
  }

  saveCompleted();
  renderAll();
}

function openNavigation() {
  document.body.classList.add("nav-open");
  elements.menuButton.setAttribute("aria-expanded", "true");
}

function closeNavigation() {
  document.body.classList.remove("nav-open");
  elements.menuButton.setAttribute("aria-expanded", "false");
}

function toggleNavigation() {
  document.body.classList.contains("nav-open") ? closeNavigation() : openNavigation();
}

elements.stepList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-step]");
  if (!button) return;
  setActiveStep(Number(button.dataset.step));
});

elements.stepStage.addEventListener("click", (event) => {
  if (event.target.closest("#complete-step")) {
    toggleComplete();
  }
});

elements.previousStep.addEventListener("click", () => {
  setActiveStep(Math.max(1, state.activeStep - 1));
});

elements.nextStep.addEventListener("click", () => {
  if (state.activeStep < steps.length) {
    setActiveStep(state.activeStep + 1);
  }
});

elements.startBuild.addEventListener("click", () => setActiveStep(1));
elements.menuButton.addEventListener("click", toggleNavigation);
elements.navScrim.addEventListener("click", closeNavigation);
elements.backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
});

elements.resetProgress.addEventListener("click", () => {
  state.completed.clear();
  saveCompleted();
  renderAll();
});

window.addEventListener("hashchange", () => {
  const hashStep = getStepFromHash();
  if (hashStep && hashStep !== state.activeStep) {
    state.activeStep = hashStep;
    renderAll();
  }
});

window.addEventListener("keydown", (event) => {
  const target = event.target;
  if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;

  if (event.key === "ArrowRight" && state.activeStep < steps.length) {
    setActiveStep(state.activeStep + 1);
  }
  if (event.key === "ArrowLeft" && state.activeStep > 1) {
    setActiveStep(state.activeStep - 1);
  }
  if (event.key === "Escape") {
    closeNavigation();
  }
});

window.addEventListener(
  "scroll",
  () => {
    elements.backToTop.classList.toggle("is-visible", window.scrollY > 900);
  },
  { passive: true },
);

renderAll();
