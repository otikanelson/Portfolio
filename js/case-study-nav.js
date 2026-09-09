/**
 * Case Study Navigation Loader
 * Dynamically loads navigation and applies accent colors based on data-accent attribute
 */

// Project accent color mapping
const projectColors = {
  afrochinatrade: {
    accent: '#ea580c',
    accentGlow: 'rgba(234, 88, 12, 0.25)',
    accentSoft: 'rgba(234, 88, 12, 0.15)',
    border: 'rgba(234, 88, 12, 0.2)',
    borderBright: 'rgba(234, 88, 12, 0.5)',
  },
  ajosave: {
    accent: '#3b82f6',
    accentSecondary: '#60a5fa',
    accentGlow: 'rgba(59, 130, 246, 0.25)',
    accentSoft: 'rgba(59, 130, 246, 0.15)',
    border: 'rgba(59, 130, 246, 0.2)',
    borderBright: 'rgba(59, 130, 246, 0.5)',
  },
  duorecall: {
    accent: '#10b981',
    accentGlow: 'rgba(16, 185, 129, 0.25)',
    accentSoft: 'rgba(16, 185, 129, 0.15)',
    border: 'rgba(16, 185, 129, 0.2)',
    borderBright: 'rgba(16, 185, 129, 0.5)',
  },
  darb: {
    accent: '#22c55e',
    accentGlow: 'rgba(34, 197, 94, 0.25)',
    accentSoft: 'rgba(34, 197, 94, 0.14)',
    border: 'rgba(34, 197, 94, 0.2)',
    borderBright: 'rgba(34, 197, 94, 0.5)',
  },
  bizzbridge: {
    accent: '#DC143C',
    accentSecondary: '#FFD700',
    accentGlow: 'rgba(220, 20, 60, 0.25)',
    accentSoft: 'rgba(220, 20, 60, 0.15)',
    border: 'rgba(220, 20, 60, 0.2)',
    borderBright: 'rgba(220, 20, 60, 0.5)',
  },
  insightory: {
    accent: '#7c3aed',
    accentSecondary: '#06b6d4',
    accentGlow: 'rgba(124, 58, 237, 0.25)',
    accentSoft: 'rgba(124, 58, 237, 0.14)',
    border: 'rgba(124, 58, 237, 0.2)',
    borderBright: 'rgba(124, 58, 237, 0.5)',
  },
  'cfc-wallet': {
    accent: '#ec4899',
    accentGlow: 'rgba(236, 72, 153, 0.25)',
    accentSoft: 'rgba(236, 72, 153, 0.15)',
    border: 'rgba(236, 72, 153, 0.2)',
    borderBright: 'rgba(236, 72, 153, 0.5)',
  },
  'cfc-freight': {
    accent: '#ef4444',
    accentSecondary: '#f87171',
    accentGlow: 'rgba(239, 68, 68, 0.25)',
    accentSoft: 'rgba(239, 68, 68, 0.15)',
    border: 'rgba(239, 68, 68, 0.2)',
    borderBright: 'rgba(239, 68, 68, 0.5)',
  },
  scenory: {
    accent: '#ec4899',
    accentSecondary: '#f97316',
    accentGlow: 'rgba(236, 72, 153, 0.25)',
    accentSoft: 'rgba(236, 72, 153, 0.15)',
    border: 'rgba(236, 72, 153, 0.2)',
    borderBright: 'rgba(236, 72, 153, 0.5)',
  },
  'shadow-of-the-arcane': {
    accent: '#7c3aed',
    accentSecondary: '#06b6d4',
    accentGlow: 'rgba(124, 58, 237, 0.25)',
    accentSoft: 'rgba(124, 58, 237, 0.14)',
    border: 'rgba(124, 58, 237, 0.2)',
    borderBright: 'rgba(124, 58, 237, 0.5)',
  },
};

// Load navigation HTML
async function loadCaseStudyNav() {
  try {
    const response = await fetch('../html/components/case-study-nav.html');
    const html = await response.text();
    
    // Insert navigation at the beginning of body
    const navContainer = document.createElement('div');
    navContainer.innerHTML = html;
    document.body.insertBefore(navContainer.firstElementChild, document.body.firstChild);
    
    // Apply accent colors
    applyAccentColors();
  } catch (error) {
    console.error('Failed to load case study navigation:', error);
  }
}

// Apply accent colors based on data-accent attribute
function applyAccentColors() {
  const projectId = document.body.getAttribute('data-accent');
  
  if (projectId && projectColors[projectId]) {
    const colors = projectColors[projectId];
    const root = document.documentElement;
    
    // Apply CSS custom properties
    Object.entries(colors).forEach(([key, value]) => {
      const cssVarName = '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase();
      root.style.setProperty(cssVarName, value);
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadCaseStudyNav);
} else {
  loadCaseStudyNav();
}
