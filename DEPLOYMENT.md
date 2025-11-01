# Deployment Guide - Dipnomics to Vercel

## Quick Deploy Steps

### 1. Push to GitHub

```bash
# If you haven't already, create a GitHub repository
git remote add origin https://github.com/yourusername/dipnomics.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

**Option A: Via Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js configuration
5. Add environment variables (see below)
6. Click "Deploy"

**Option B: Via Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel
```

### 3. Environment Variables

Add these in Vercel Dashboard ? Project ? Settings ? Environment Variables:

```
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-secret-key-generate-with-openssl
DATABASE_URL=your-database-url (if using database)
BINANCE_API_KEY=your-api-key (optional)
```

Generate NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

### 4. Custom Domain (Optional)

1. Go to Project Settings ? Domains
2. Add your custom domain (dipnomics.com)
3. Follow DNS configuration instructions
4. Vercel will automatically provision SSL certificate

## Post-Deployment Checklist

- [ ] Environment variables configured
- [ ] Custom domain connected (if applicable)
- [ ] SSL certificate active (automatic with Vercel)
- [ ] Database connection tested (if using)
- [ ] API routes tested
- [ ] Mobile responsiveness verified
- [ ] Analytics configured (optional)

## Performance Optimization

Vercel automatically optimizes Next.js apps, but you can:

1. **Enable Edge Functions** (if needed for API routes)
2. **Configure Caching** in `next.config.js`
3. **Use Image Optimization** (Next.js Image component)
4. **Enable ISR** (Incremental Static Regeneration) for static pages

## Monitoring

Vercel provides:
- Real-time logs
- Analytics
- Performance metrics
- Error tracking

Access via Vercel Dashboard ? Project ? Analytics

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Verify all dependencies are installed
- Check for TypeScript errors: `npm run type-check`

### Environment Variables Not Working
- Ensure variables are set in Vercel Dashboard
- Redeploy after adding variables
- Check variable names match code

### Images Not Loading
- Verify images are in `/public` directory
- Use Next.js `<Image>` component for optimization
- Check image paths are correct

## Support

For issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Check project README.md
