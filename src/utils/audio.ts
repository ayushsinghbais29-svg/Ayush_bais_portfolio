/**
 * Synthesizes the iconic Netflix "Tudum" sound using Web Audio API oscillators,
 * filters, and envelope shaping. Zero external audio file dependencies.
 */

let audioCtx: AudioContext | null = null;
let isAudioMuted = false;

export function getAudioMuted(): boolean {
  return isAudioMuted;
}

export function setAudioMuted(muted: boolean): void {
  isAudioMuted = muted;
}

export function playNetflixTudum(): void {
  if (isAudioMuted) return;

  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // First impact: low cinematic bass hit (the "Tu")
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    const filter1 = audioCtx.createBiquadFilter();

    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(65, now); // D2
    osc1.frequency.exponentialRampToValueAtTime(45, now + 0.4);

    filter1.type = 'lowpass';
    filter1.frequency.setValueAtTime(320, now);
    filter1.frequency.exponentialRampToValueAtTime(80, now + 0.5);

    gain1.gain.setValueAtTime(0.001, now);
    gain1.gain.linearRampToValueAtTime(0.35, now + 0.04);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

    osc1.connect(filter1);
    filter1.connect(gain1);
    gain1.connect(audioCtx.destination);

    osc1.start(now);
    osc1.stop(now + 0.6);

    // Second impact: deeper resonant orchestral "DUM" hit with wide warmth
    const delay = 0.16;
    const osc2 = audioCtx.createOscillator();
    const gain2 = audioCtx.createGain();
    const filter2 = audioCtx.createBiquadFilter();

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(98, now + delay); // G2
    osc2.frequency.exponentialRampToValueAtTime(55, now + delay + 1.2);

    filter2.type = 'lowpass';
    filter2.frequency.setValueAtTime(450, now + delay);
    filter2.frequency.exponentialRampToValueAtTime(120, now + delay + 1.2);

    gain2.gain.setValueAtTime(0.001, now + delay);
    gain2.gain.linearRampToValueAtTime(0.4, now + delay + 0.05);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + delay + 1.4);

    osc2.connect(filter2);
    filter2.connect(gain2);
    gain2.connect(audioCtx.destination);

    osc2.start(now + delay);
    osc2.stop(now + delay + 1.5);

    // Shimmer chord ring
    const osc3 = audioCtx.createOscillator();
    const gain3 = audioCtx.createGain();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(220, now + delay + 0.05);
    osc3.frequency.exponentialRampToValueAtTime(110, now + delay + 1.6);

    gain3.gain.setValueAtTime(0.001, now + delay + 0.05);
    gain3.gain.linearRampToValueAtTime(0.12, now + delay + 0.1);
    gain3.gain.exponentialRampToValueAtTime(0.0001, now + delay + 1.6);

    osc3.connect(gain3);
    gain3.connect(audioCtx.destination);

    osc3.start(now + delay + 0.05);
    osc3.stop(now + delay + 1.7);
  } catch {
    // Audio context may be restricted before user gesture
  }
}

export function playHoverTick(): void {
  if (isAudioMuted) return;
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === 'suspended') return;

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.04);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  } catch {
    // Graceful fallback
  }
}
