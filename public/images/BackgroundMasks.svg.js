// this is static data, not a real component
// but it's written as JSX so we can import the below SVG inline
export default () => (
  <svg width="0" height="0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="speakersClipPath" clipPathUnits="objectBoundingBox">
        <path d="M 0.4492613,0.06756457 C 0.28632949,-0.02627469 0.08186558,0.02846492 0,0.06756457 V 0.97133151 C 0.09877885,0.91784616 0.36020613,0.81139943 0.53074978,0.91499825 0.70129064,1.018599 0.90756912,1.0145052 1,0.97133151 V 0 C 0.8843121,0.06162119 0.61219382,0.16140345 0.4492613,0.06756457 Z" />
       </clipPath>
      <clipPath id="sponsorsClipPath" clipPathUnits="objectBoundingBox">
        <path d="M 0,-1.9992572 V 0.92654573 C 0.09853383,0.87305751 0.33695132,0.84454301 0.50707125,0.94814192 0.67719118,1.0517379 0.90779839,0.96970991 1,0.92654568 V -1.9971113 Z" />
     </clipPath>
    </defs>
  </svg>
)
