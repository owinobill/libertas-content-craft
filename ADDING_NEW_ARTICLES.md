# How to Add New Articles to Libertas Africa Website

This guide explains how to quickly add new articles to your Insights Hub. The process is streamlined to minimize code duplication.

## Quick Steps

### 1. Add Article Metadata
Open `src/data/articles.ts` and add your new article to the `articles` array:

```typescript
{
  id: "your-article-id",
  title: "Your Article Title",
  slug: "your-article-slug",
  description: "Brief description for SEO and cards",
  date: "January 15, 2026",
  readTime: "5 min read",
  category: "Market Insights",
  image: yourArticleHero, // Import at top of file
  imageAlt: "Descriptive alt text for image",
  keywords: "keyword1, keyword2, keyword3",
  datePublished: "2026-01-15",
  dateModified: "2026-01-15",
}
```

### 2. Add Your Hero Image
- Place your hero image in `src/assets/` folder (e.g., `your-article-hero.jpg`)
- Import it at the top of `src/data/articles.ts`:
  ```typescript
  import yourArticleHero from "@/assets/your-article-hero.jpg";
  ```

### 3. Create Article Content Component
Create a new file `src/pages/ArticleYourTitle.tsx`:

```typescript
import { ArticleTemplate } from "@/components/ArticleTemplate";
import { getArticleById } from "@/data/articles";

const ArticleYourTitle = () => {
  const article = getArticleById("your-article-id");
  
  if (!article) return null;

  return (
    <ArticleTemplate article={article}>
      {/* Your article content goes here */}
      <h2 className="text-2xl font-bold mb-6 mt-8">Introduction</h2>
      
      <p className="mb-6">
        Your article content...
      </p>
      
      <h2 className="text-2xl font-bold mb-6 mt-12">Section Title</h2>
      
      <p className="mb-6">
        More content...
      </p>
      
      {/* Continue with your article content */}
    </ArticleTemplate>
  );
};

export default ArticleYourTitle;
```

### 4. Add Route
Open `src/App.tsx` and add your route:

```typescript
import ArticleYourTitle from "./pages/ArticleYourTitle";

// Then in the Routes section:
<Route path="/insights-hub/your-article-slug" element={<ArticleYourTitle />} />
```

### 5. Publish
Click the **Publish** button in Lovable to deploy your changes to your custom domain.

## That's It!

Your new article will automatically:
- ✅ Appear in the Insights Hub
- ✅ Have proper SEO metadata
- ✅ Include social sharing buttons
- ✅ Show related articles
- ✅ Have structured data for search engines
- ✅ Include breadcrumb navigation

## Content Formatting Tips

Use these HTML elements in your article content:

```typescript
{/* Headings */}
<h2 className="text-2xl font-bold mb-6 mt-12">Main Section</h2>
<h3 className="text-xl font-semibold mb-4 mt-8">Subsection</h3>

{/* Paragraphs */}
<p className="mb-6">Regular text content...</p>

{/* Bold text inline */}
<p className="mb-6">
  <strong>Bold text:</strong> Regular text continues...
</p>

{/* Lists */}
<ul className="list-disc pl-6 mb-6">
  <li className="mb-2">List item 1</li>
  <li className="mb-2">List item 2</li>
</ul>

{/* Quotes */}
<blockquote className="border-l-4 border-primary pl-4 italic my-6">
  "Your quote here"
</blockquote>
```

## Example Article Structure

```typescript
<ArticleTemplate article={article}>
  <h2 className="text-2xl font-bold mb-6 mt-8">Introduction</h2>
  <p className="mb-6">Opening paragraph...</p>
  
  <h2 className="text-2xl font-bold mb-6 mt-12">Main Topic 1</h2>
  <p className="mb-6">Content...</p>
  
  <h3 className="text-xl font-semibold mb-4 mt-8">Subtopic</h3>
  <p className="mb-6">More content...</p>
  
  <h2 className="text-2xl font-bold mb-6 mt-12">Conclusion</h2>
  <p className="mb-6">Closing thoughts...</p>
</ArticleTemplate>
```

## Need Help?

The system handles all the complex parts automatically:
- SEO optimization
- Social sharing
- Related articles
- Breadcrumbs
- Structured data
- Responsive design

You only need to focus on writing great content!
