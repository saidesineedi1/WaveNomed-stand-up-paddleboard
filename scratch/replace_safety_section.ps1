$html = Get-Content "index.html" -Raw -Encoding utf8

$newSection = @"
        <section class="section-wrap alt-bg" id="safety" data-section="safety">
            <div class="section-container">
                <div class="safety-showcase-grid">

                    <!-- Left Column: Rich Narrative & Protocols -->
                    <div class="safety-content-col">
                        <div class="safety-header-group">
                            <span class="section-eyebrow">UNCOMPROMISING WATER PROTOCOLS · ALPINE READINESS</span>
                            <h2 class="section-headline font-serif">Pristine Glides Rooted in <span class="section-headline-accent">Elite Safety Mandates</span></h2>
                            <p class="section-desc font-sans safety-lead-p">
                                Every WaveNomad voyage across glacial waters begins with uncompromising preparation. From real-time calibrated weather gates to individually fitted USCG Type III flotation vests and certified watermaster inspections, we eliminate every element of unpredictability so you can immerse yourself in uninterrupted alpine tranquility.
                            </p>
                            <p class="section-desc font-sans safety-sub-p">
                                Whether you're navigating dramatic granite fjord narrows at dawn or drifting into secluded emerald coves, our complete equipment redundancy ensures absolute peace of mind for beginners and seasoned explorers alike.
                            </p>
                        </div>

                        <!-- 3 Luxury Protocol Spec Strips -->
                        <div class="safety-pillars-stack">
                            <div class="safety-pillar-row">
                                <div class="pillar-icon-box" aria-hidden="true">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                    </svg>
                                </div>
                                <div class="pillar-text-content">
                                    <div class="pillar-top-line">
                                        <h3 class="pillar-title font-serif">USCG Certified Type III Fleet</h3>
                                        <span class="pillar-tag">Mandatory Standard</span>
                                    </div>
                                    <p class="pillar-desc">Custom-fitted high-mobility neoprene life vests, emergency distress whistles, and ultra-durable coiled ankle leashes included with every board.</p>
                                </div>
                            </div>

                            <div class="safety-pillar-row">
                                <div class="pillar-icon-box" aria-hidden="true">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <line x1="2" y1="12" x2="22" y2="12"/>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                                    </svg>
                                </div>
                                <div class="pillar-text-content">
                                    <div class="pillar-top-line">
                                        <h3 class="pillar-title font-serif">Satellite SOS &amp; Offline Fjord Maps</h3>
                                        <span class="pillar-tag telemetry-tag">Live Iridium Tether</span>
                                    </div>
                                    <p class="pillar-desc">Garmin inReach® satellite SOS support and waterproof deck packs with high-resolution offline navigational charts for remote mountain routes.</p>
                                </div>
                            </div>

                            <div class="safety-pillar-row">
                                <div class="pillar-icon-box" aria-hidden="true">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                        <polyline points="14 2 14 8 20 8"/>
                                        <line x1="16" y1="13" x2="8" y2="13"/>
                                        <line x1="16" y1="17" x2="8" y2="17"/>
                                    </svg>
                                </div>
                                <div class="pillar-text-content">
                                    <div class="pillar-top-line">
                                        <h3 class="pillar-title font-serif">Dockside Valet &amp; Wind Gate</h3>
                                        <span class="pillar-tag gate-tag">&lt; 12 Knot Cutoff</span>
                                    </div>
                                    <p class="pillar-desc">Complimentary dockside orientation, stance calibration, and automatic weather pause protocols with instant rescheduling guarantees.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Bottom Action & Reassurance Bar -->
                        <div class="safety-footer-action-bar">
                            <a href="#rentals" class="cta-pill-primary">
                                <span>Explore Certified Fleet</span>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                            <div class="safety-guarantee-badge">
                                <span class="guarantee-beacon" aria-hidden="true"></span>
                                <div class="guarantee-text">
                                    <strong>100% Safety Record</strong>
                                    <span>14,000+ Expeditions Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Unique 2-Image Flush Composition -->
                    <div class="safety-media-col" aria-label="Expedition safety readiness imagery">
                        <div class="safety-dual-canvas-frame">

                            <!-- Image 1: Primary Dock Readiness Vista -->
                            <div class="safety-canvas-primary">
                                <img src="assets/images/safety-readiness-dock.jpg"
                                    alt="Certified paddler with life jacket and carbon paddleboard on alpine lake dock"
                                    class="safety-img-asset" loading="lazy">
                                <div class="safety-canvas-overlay"></div>
                                <div class="canvas-caption-pill">
                                    <span class="caption-dot"></span>
                                    <span>Dock Readiness · Alpine Station</span>
                                </div>
                            </div>

                            <!-- Image 2: Overlapping Emerald Cove Action Vista -->
                            <div class="safety-canvas-secondary">
                                <img src="assets/images/moment-cove-explore.jpg"
                                    alt="Paddlers exploring crystal clear emerald waters between granite cliffs"
                                    class="safety-img-asset" loading="lazy">
                                <div class="safety-canvas-overlay"></div>
                                <div class="canvas-caption-pill">
                                    <span class="caption-dot"></span>
                                    <span>Glacial Basin · Emerald Cove</span>
                                </div>
                            </div>

                            <!-- Floating Glass Badge (Top Right) -->
                            <div class="safety-floating-badge badge-top-right">
                                <div class="badge-icon-circle">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <div class="badge-text-stack">
                                    <span class="badge-super">USCG LEVEL 5</span>
                                    <span class="badge-sub">Certified Protocol</span>
                                </div>
                            </div>

                            <!-- Floating Glass Stat Card (Bottom Left) -->
                            <div class="safety-floating-stat-card card-bottom-left">
                                <div class="stat-big-val font-serif">&lt; 3.5m</div>
                                <div class="stat-small-lbl">Zodiac Response Radius</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
"@

$pattern = '(?s)<section class="section-wrap alt-bg" id="safety">.*?</section>'
$html = $html -replace $pattern, $newSection

Set-Content -Path "index.html" -Value $html -Encoding utf8 -NoNewline
"Successfully updated index.html!"
