<script setup lang="ts">
withDefaults(defineProps<{
  size?: number;
  showText?: boolean;
  showTagline?: boolean;
}>(), {
  size: 48,
  showText: true,
  showTagline: true,
});
</script>

<template>
  <div
    class="logo-container"
    :style="{ '--logo-size': `${size}px` }"
  >
    <div class="logo-svg-wrap">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          class="glow-ring"
          cx="24"
          cy="24"
          r="23"
        />

        <circle
          class="ring-outer"
          cx="24"
          cy="24"
          r="22"
        />

        <g class="tick-marks">
          <line
            x1="24"
            y1="3.5"
            x2="24"
            y2="6"
          />
          <line
            x1="24"
            y1="42"
            x2="24"
            y2="44.5"
          />
          <line
            x1="3.5"
            y1="24"
            x2="6"
            y2="24"
          />
          <line
            x1="42"
            y1="24"
            x2="44.5"
            y2="24"
          />
          <line
            x1="8.1"
            y1="8.1"
            x2="10.2"
            y2="10.2"
          />
          <line
            x1="37.8"
            y1="37.8"
            x2="39.9"
            y2="39.9"
          />
          <line
            x1="39.9"
            y1="8.1"
            x2="37.8"
            y2="10.2"
          />
          <line
            x1="8.1"
            y1="37.8"
            x2="10.2"
            y2="39.9"
          />
        </g>

        <circle
          class="ring-inner"
          cx="24"
          cy="24"
          r="16"
        />

        <text
          class="cardinal north"
          x="24"
          y="10.5"
          text-anchor="middle"
          dominant-baseline="central"
        >N</text>
        <text
          class="cardinal"
          x="24"
          y="37.5"
          text-anchor="middle"
          dominant-baseline="central"
        >S</text>
        <text
          class="cardinal"
          x="37"
          y="24"
          text-anchor="middle"
          dominant-baseline="central"
        >E</text>
        <text
          class="cardinal"
          x="11"
          y="24"
          text-anchor="middle"
          dominant-baseline="central"
        >W</text>

        <polygon class="needle-north" points="24,8 21.5,24 24,26.5 26.5,24" />
        <polygon class="needle-south" points="24,40 21.5,24 24,21.5 26.5,24" />

        <circle
          class="center-dot"
          cx="24"
          cy="24"
          r="2.5"
        />
      </svg>
    </div>

    <div v-if="showText" class="logo-text">
      <span class="logo-name">Travel Log</span>
      <span v-if="showTagline" class="logo-tagline">Your journeys, mapped</span>
    </div>
  </div>
</template>

<style scoped>
  .logo-container {
  --color-text-primary: hsl(var(--bc));
  --color-text-secondary: hsl(var(--bc) / 0.72);
  --color-text-tertiary: hsl(var(--bc) / 0.55);
  --color-border-tertiary: hsl(var(--bc) / 0.15);
  --color-border-secondary: hsl(var(--bc) / 0.35);
  --compass-ring-color: #888780;
  --compass-needle-north: #444441;
  --compass-needle-north-stroke: rgb(0 0 0 / 35%);
  --compass-needle-south: rgb(0 0 0 / 30%);
  --compass-needle-south-stroke: rgb(0 0 0 / 20%);
  --compass-center: #444441;
  --compass-center-stroke: rgb(0 0 0 / 30%);
  --hover-ring-outer: #ba7517;
  --hover-ring-inner: #ef9f27;
  --hover-glow: #ef9f27;
  --hover-center: #ba7517;
  --hover-needle-north: #e8593c;
  --hover-text-primary: #ba7517;
  --hover-text-secondary: #ef9f27;
  --hover-ticks: #ef9f27;
  --cardinal-default: #5f5e59;
  --cardinal-north: #e8593c;

  display: inline-flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  user-select: none;
}

:global(html.dark) .logo-container,
:global(html.dark-mode) .logo-container,
:global(html[data-theme="dark"]) .logo-container,
:global(body[data-theme="dark"]) .logo-container,
:global([data-theme="dark"]) .logo-container,
:global(.dark) .logo-container,
:global(.dark-mode) .logo-container {
  --compass-ring-color: #9b988f;
  --compass-needle-north: #c2c0b6;
  --compass-needle-north-stroke: rgb(255 255 255 / 30%);
  --compass-needle-south: #5f5e5a;
  --compass-needle-south-stroke: rgb(255 255 255 / 16%);
  --compass-center: #c2c0b6;
  --compass-center-stroke: rgb(255 255 255 / 24%);
  --hover-ring-outer: #86a7d7;
  --hover-ring-inner: #a9c6f2;
  --hover-glow: #8fb8ec;
  --hover-center: #9fc0eb;
  --hover-needle-north: #c3dcff;
  --hover-text-primary: #cfe2ff;
  --hover-text-secondary: #a9c6f2;
  --hover-ticks: #a9c6f2;
  --cardinal-default: #d8d6ce;
  --cardinal-north: #c3dcff;
}

.logo-svg-wrap {
  position: relative;
  flex: 0 0 var(--logo-size);
  width: var(--logo-size);
  height: var(--logo-size);
  min-width: var(--logo-size);
  min-height: var(--logo-size);
}

.logo-svg-wrap svg {
  width: 100%;
  height: 100%;
}

/* Idle state */
.ring-outer {
  transition: stroke-width 0.3s;
  stroke: var(--compass-ring-color);
  stroke-width: 1.15;
  fill: none;
}
.ring-inner {
  transition: opacity 0.4s;
  opacity: 0.55;
  stroke: var(--compass-ring-color);
  stroke-width: 0.75;
  fill: none;
}
.needle-north {
  transform-origin: 24px 24px;
  fill: var(--compass-needle-north);
  stroke: var(--compass-needle-north-stroke);
  stroke-width: 0.45;
}
.needle-south {
  transform-origin: 24px 24px;
  fill: var(--compass-needle-south);
  stroke: var(--compass-needle-south-stroke);
  stroke-width: 0.4;
}
.center-dot {
  fill: var(--compass-center);
  stroke: var(--compass-center-stroke);
  stroke-width: 0.3;
}
.cardinal {
  transition: opacity 0.4s;
  opacity: 1;
  font-size: 7.5px;
  font-weight: 600;
  fill: var(--cardinal-default);
  paint-order: stroke;
  stroke: hsl(var(--b1));
  stroke-width: 0.35px;
}
.cardinal.north {
  opacity: 1;
  fill: var(--cardinal-north);
  font-size: 8.2px;
  font-weight: 700;
}
.tick-marks {
  transition: opacity 0.4s;
  opacity: 0;
  stroke: var(--hover-ticks);
  stroke-width: 1;
  stroke-linecap: round;
}
.glow-ring {
  fill: var(--hover-glow);
  opacity: 0;
  transition: opacity 0.4s;
}

/* Hover animations */
@keyframes spin-needle {
  0% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(340deg);
  }
  60% {
    transform: rotate(320deg);
  }
  80% {
    transform: rotate(355deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 0.12;
  }
}
@keyframes fade-in-cardinal {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.logo-container:hover .needle-north,
.logo-container:hover .needle-south {
  animation: spin-needle 1.1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  transform-origin: 24px 24px;
}
.logo-container:hover .ring-outer {
  stroke: var(--hover-ring-outer);
  stroke-width: 1.5;
}
.logo-container:hover .ring-inner {
  opacity: 1;
  stroke: var(--hover-ring-inner);
}
.logo-container:hover .center-dot {
  fill: var(--hover-center);
}
.logo-container:hover .needle-north {
  fill: var(--hover-needle-north);
}
.logo-container:hover .cardinal {
  animation: fade-in-cardinal 0.3s ease 0.2s forwards;
  opacity: 0.72;
}
.logo-container:hover .tick-marks {
  opacity: 1;
}
.logo-container:hover .glow-ring {
  animation: pulse-glow 1.5s ease-in-out infinite;
}

/* Text */
.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
  align-items: flex-start;
  text-align: left;
}
.logo-name {
  display: block;
  font-size: 22px;
  font-weight: 500;
  color: var(--color-text-primary);
  letter-spacing: -0.3px;
}
.logo-tagline {
  display: block;
  font-size: 11px;
  font-weight: 400;
  color: var(--color-text-tertiary);
  letter-spacing: 1.8px;
  text-transform: uppercase;
  margin-top: 6px;
  transition: letter-spacing 0.4s;
}
.logo-container:hover .logo-name {
  color: var(--hover-text-primary);
}
.logo-container:hover .logo-tagline {
  color: var(--hover-text-secondary);
  letter-spacing: 2.4px;
}
</style>
