# Design Guidelines: React Hooks Learning Application

## Design Approach

**Selected Approach:** Design System with Modern Custom Styling
**Justification:** This is an educational demonstration app focused on React hooks functionality. The design should be clean, modern, and professional while remaining simple enough not to distract from the learning objectives. We'll use a contemporary design system foundation with custom gradient treatments.

**Core Design Principles:**
- Clarity over decoration - every visual element supports understanding
- Smooth, subtle interactions that demonstrate React's reactive nature
- Modern, gradient-based color palette distinct from the original
- Card-based layouts for content organization
- Responsive design that works on all devices

---

## Typography

**Font Stack:**
- Primary: 'Inter', system-ui, -apple-system, sans-serif
- Monospace (for counter display): 'JetBrains Mono', 'Courier New', monospace

**Type Scale:**
- H1 (Page Titles): 2.5rem / 40px, font-weight 700
- H2 (Section Headers): 2rem / 32px, font-weight 600
- Body Text: 1rem / 16px, font-weight 400, line-height 1.6
- Button Text: 0.875rem / 14px, font-weight 500, uppercase, letter-spacing 0.05em
- Counter Display: 3rem / 48px, font-weight 700, monospace
- Footer Text: 0.875rem / 14px, font-weight 400

---

## Layout System

**Spacing Units:** Use Tailwind spacing primitives: 2, 4, 8, 12, 16, 20, 24, 32
- Micro spacing (component internals): 2, 4
- Component spacing: 8, 12, 16
- Section spacing: 20, 24, 32

**Layout Structure:**
- Fixed sidebar navigation (desktop: 280px width, mobile: overlay full-width)
- Main content area with max-width container (max-w-4xl)
- Content padding: p-8 desktop, p-4 mobile
- Footer fixed at bottom with minimal height

**Grid System:**
- Content uses single column layout for clarity
- Cards use consistent padding: p-8 desktop, p-6 mobile
- Consistent gap between elements: gap-4 for tight grouping, gap-8 for sections

---

## Component Library

### Navigation Sidebar
- **Desktop:** Fixed left sidebar, full height, 280px width
- **Mobile:** Hamburger toggle revealing full-screen overlay navigation
- **Visual Treatment:** Gradient background (purple to blue vertical gradient), frosted glass effect with blur
- **Menu Toggle Button:** Circular icon button, 48px diameter, white with subtle shadow
- **Navigation Links:** Full-width items with 16px padding, rounded corners (8px), hover state with lighter background overlay (20% white), active state with white background and colored text
- **Logo/Title Area:** Top section with app name, 24px padding, subtle bottom border

### Theme Toggle Control
- **Position:** Bottom of sidebar (desktop) or top-right corner (mobile)
- **Visual:** Toggle switch design with sun/moon icons
- **States:** Smooth sliding animation (300ms ease), glowing effect in active state
- **Size:** 64px width × 32px height track, 28px diameter thumb

### Page Content Cards
- **Container:** White background (light mode), dark gray (dark mode)
- **Border Radius:** 16px
- **Shadow:** Soft shadow (0 4px 6px rgba(0,0,0,0.07))
- **Padding:** p-8 desktop, p-6 mobile
- **Spacing:** mb-8 between cards

### Counter Display (Home Page)
- **Container:** Highlighted card with gradient border (2px)
- **Number Display:** Extra large monospace font, centered, gradient text fill
- **Label:** Small uppercase text above counter
- **Animation:** Smooth number transition with scale effect on update

### Buttons
- **Primary Style:** Gradient background (matches theme), white text, rounded-lg (12px)
- **Padding:** px-6 py-3
- **Hover State:** Slight scale (1.02), increased shadow
- **Active State:** Scale (0.98)
- **Transition:** All properties 200ms ease

### Loading State
- **Visual:** Centered spinner with gradient colors, fade-in animation
- **Container:** Full content area, flex centered
- **Size:** 48px diameter spinner
- **Animation:** Continuous rotation, smooth fade-in/out

### Footer
- **Layout:** Centered text, minimal padding (p-4)
- **Content:** Attribution text with link to GitHub
- **Visual:** Subtle top border, muted text color
- **Link Style:** Gradient text on hover, underline decoration

---

## Color Palette

**Light Mode:**
- Background: #F8F9FA (soft gray)
- Surface (cards): #FFFFFF
- Text Primary: #1A1A1A
- Text Secondary: #6B7280
- Accent Gradient: Linear gradient from #8B5CF6 (purple) to #3B82F6 (blue)
- Border: #E5E7EB

**Dark Mode:**
- Background: #0F172A (dark navy)
- Surface (cards): #1E293B
- Text Primary: #F1F5F9
- Text Secondary: #94A3B8
- Accent Gradient: Linear gradient from #A78BFA (light purple) to #60A5FA (light blue)
- Border: #334155

**Sidebar Gradient (Both Modes):**
- Light: Linear gradient from #8B5CF6 to #3B82F6 (top to bottom)
- Dark: Linear gradient from #7C3AED to #2563EB with 90% opacity overlay

---

## Animations

**Principles:** Subtle, purposeful, performance-optimized

**Implemented Animations:**
1. **Route Transitions:** 300ms fade-in with slight upward slide (8px)
2. **Menu Toggle:** Sidebar slides from left (desktop) or top (mobile), 400ms ease-out
3. **Counter Updates:** Number scales to 1.1 briefly then back to 1.0, 200ms
4. **Theme Switch:** Background/text colors transition over 300ms, toggle slides over 200ms
5. **Button Interactions:** Scale and shadow changes, 200ms ease
6. **Card Hover:** Subtle elevation increase with shadow enhancement, 300ms
7. **Loading Spinner:** Continuous 1s linear rotation

**Interaction Feedback:**
- All clickable elements have hover states with scale/color changes
- Focus states include visible outline for accessibility
- Active states provide immediate tactile feedback

---

## Responsive Breakpoints

**Mobile:** < 768px
- Sidebar becomes full-screen overlay
- Reduce padding and font sizes
- Stack all content vertically
- Theme toggle moves to header

**Tablet:** 768px - 1024px
- Sidebar remains fixed but narrower (240px)
- Moderate padding adjustments
- Maintain sidebar navigation

**Desktop:** > 1024px
- Full 280px sidebar
- Maximum content width container
- Optimal spacing and typography

---

## Accessibility

- Minimum contrast ratio 4.5:1 for all text
- Focus indicators on all interactive elements (2px solid outline with 2px offset)
- ARIA labels for icon-only buttons
- Semantic HTML throughout
- Keyboard navigation fully supported
- Screen reader friendly navigation structure

---

## Images

**Not applicable** - This is a functional demonstration app without image requirements. All visual interest comes from gradients, typography, and layout.