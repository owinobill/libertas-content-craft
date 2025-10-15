# Post-Deployment Testing Checklist
**Use this checklist after deploying to production**

---

## Immediate Tests (First 30 Minutes)

### ✅ Basic Site Access
- [ ] Visit `https://libertasafrica.com` → Homepage loads
- [ ] Check HTTPS lock icon in browser → Secure connection
- [ ] Test on mobile device → Responsive design works
- [ ] Test on desktop → Layout correct

### ✅ Navigation Test (5 minutes)
- [ ] Click **Home** → Goes to homepage
- [ ] Click **About** → Scrolls to about section
- [ ] Click **Solutions** → Opens solutions page
- [ ] Hover **Solutions** → Dropdown appears
- [ ] Click dropdown items → Navigate to correct sections
- [ ] Click **Insights Hub** → Opens insights page
- [ ] Click **Case Studies** → Scrolls to case studies
- [ ] Click **Contact** → Scrolls to contact form
- [ ] Test mobile menu → Hamburger opens/closes

### ✅ Direct URL Test (3 minutes)
Open each URL directly in browser (incognito mode):
- [ ] `https://libertasafrica.com/` → Homepage
- [ ] `https://libertasafrica.com/solutions` → Solutions page
- [ ] `https://libertasafrica.com/insights-hub` → Insights Hub
- [ ] `https://libertasafrica.com/insights-hub/debt-sales-dynamics` → Article
- [ ] `https://libertasafrica.com/privacy-policy` → Privacy Policy
- [ ] `https://libertasafrica.com/terms-of-use` → Terms of Use

**Expected:** All should load WITHOUT redirects (HTTP 200)

### ✅ Asset Loading Test (2 minutes)
- [ ] Logo loads in header
- [ ] Logo loads in footer
- [ ] All images visible on homepage
- [ ] Article images load on Insights Hub
- [ ] No broken image icons

### ✅ Console Check (1 minute)
1. Open browser DevTools (F12)
2. Go to Console tab
3. Refresh page
- [ ] No red errors (warnings are OK)
- [ ] "SW registered" message appears

---

## Google Search Console (Day 1-3)

### Submit Sitemap
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select property: `libertasafrica.com`
3. Go to **Sitemaps** section
4. Add new sitemap: `https://libertasafrica.com/sitemap.xml`
5. Click **Submit**

**Expected:** Sitemap should be "Success" within 24 hours

### Request Indexing
1. Go to **URL Inspection** tool
2. Test each page URL:
   - `https://libertasafrica.com/`
   - `https://libertasafrica.com/solutions`
   - `https://libertasafrica.com/insights-hub`
   - (All article URLs)
   - `https://libertasafrica.com/privacy-policy`
   - `https://libertasafrica.com/terms-of-use`

3. For each URL:
   - Click **Test Live URL**
   - Wait for test to complete
   - Click **Request Indexing**
   - Wait for confirmation

**Expected:** All should show "URL is on Google" within 1-2 weeks

---

## Performance Test (Day 1)

### PageSpeed Insights
1. Visit [PageSpeed Insights](https://pagespeed.web.dev/)
2. Enter: `https://libertasafrica.com`
3. Run test for Mobile and Desktop

**Expected Scores:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: 100

### GTmetrix (Optional)
1. Visit [GTmetrix](https://gtmetrix.com/)
2. Enter: `https://libertasafrica.com`
3. Run test

**Expected:**
- Grade: A or B
- LCP: < 2.5s
- TBT: < 200ms

---

## SEO Verification (Week 1)

### Manual Checks
- [ ] View page source → `<link rel="canonical"` present
- [ ] Check canonical URL → Matches current page
- [ ] Verify meta description → Unique per page
- [ ] Check Open Graph tags → Present and correct
- [ ] Test robots.txt → `https://libertasafrica.com/robots.txt` accessible
- [ ] Test sitemap → `https://libertasafrica.com/sitemap.xml` accessible

### Rich Results Test
1. Go to [Rich Results Test](https://search.google.com/test/rich-results)
2. Enter: `https://libertasafrica.com`
3. Run test

**Expected:** Valid structured data (Organization, WebSite)

### Mobile-Friendly Test
1. Go to [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
2. Enter: `https://libertasafrica.com`
3. Run test

**Expected:** "Page is mobile-friendly"

---

## Monitoring (Ongoing)

### Week 1-2: Daily Checks
- [ ] Check GSC Coverage report
- [ ] Look for crawl errors
- [ ] Monitor "Page with redirect" status (should decrease)

### Week 2-4: Weekly Checks
- [ ] GSC Coverage → All pages indexed
- [ ] Analytics → Traffic patterns normal
- [ ] No 404 errors in logs

### Month 2+: Monthly Checks
- [ ] Run Lighthouse audit → Maintain scores
- [ ] Check Core Web Vitals → All "Good"
- [ ] Review broken links → None found
- [ ] Update sitemap after new content

---

## Troubleshooting

### If Pages Still Show "Page with redirect"
1. **Wait 2-4 weeks** → Google needs time to recrawl
2. **Verify deployment:**
   ```bash
   curl -I https://libertasafrica.com/solutions
   ```
   Should show: `HTTP/2 200`
3. **Check _redirects file:**
   - Should be in `public/_redirects`
   - Contains: `/* /index.html 200`
4. **Re-request indexing** → Use URL Inspection tool again

### If Sitemap Not Processing
1. Check sitemap is accessible
2. Verify XML is valid (no syntax errors)
3. Ensure all URLs use `https://libertasafrica.com` format
4. Re-submit in GSC

### If Performance Drops
1. Run Lighthouse audit → Identify issues
2. Check asset sizes → Images optimized?
3. Verify CDN caching → Assets cached?
4. Check Service Worker → Registered?

---

## Success Criteria

### Week 1 ✅
- [ ] All pages return HTTP 200
- [ ] Navigation works on all devices
- [ ] Sitemap submitted and processing
- [ ] No critical errors in GSC

### Week 2 ✅
- [ ] "Page with redirect" errors decreasing
- [ ] Some pages showing as indexed
- [ ] Performance scores > 90
- [ ] No broken links

### Week 4 ✅
- [ ] All pages indexed in GSC
- [ ] Zero "Page with redirect" errors
- [ ] Organic traffic starting
- [ ] Core Web Vitals all "Good"

### Month 2+ ✅
- [ ] Consistent organic traffic growth
- [ ] All SEO metrics stable
- [ ] Pages ranking for target keywords
- [ ] No indexing issues

---

## Quick Command Reference

### Test HTTP Status
```bash
# Test homepage
curl -I https://libertasafrica.com/

# Test solutions page
curl -I https://libertasafrica.com/solutions

# Test insights hub
curl -I https://libertasafrica.com/insights-hub
```

**Expected Output:**
```
HTTP/2 200
content-type: text/html
```

### Check Canonical Tag
```bash
curl -s https://libertasafrica.com/solutions | grep canonical
```

**Expected Output:**
```html
<link rel="canonical" href="https://libertasafrica.com/solutions" />
```

### Verify Sitemap
```bash
curl -I https://libertasafrica.com/sitemap.xml
```

**Expected Output:**
```
HTTP/2 200
content-type: application/xml
```

---

## Contact Support

If you encounter persistent issues:

1. **Check QA Reports:**
   - `SEO_DEPLOYMENT_QA_REPORT.md`
   - `FULL_QA_REPORT.md`

2. **Review Documentation:**
   - [Lovable Docs](https://docs.lovable.dev/)
   - [Troubleshooting Guide](https://docs.lovable.dev/tips-tricks/troubleshooting)

3. **Contact Libertas:**
   - Email: connect@libertasafrica.com
   - Phone: +254 20 5253963

---

**Last Updated:** October 15, 2025  
**Next Review:** After production deployment  
**Status:** Ready for production testing
