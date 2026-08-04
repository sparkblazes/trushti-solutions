'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
        const res = await fetch(`${apiUrl}/blogs`);
        const json = await res.json();
        if (json.success) {
          setPosts(json.data);
        }
      } catch (err) {
        console.error('Failed to fetch blogs', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogs();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8fafc', textAlign: 'center' }}>
        <div className="wrap reveal">
          <span className="section-eyebrow" style={{ color: '#3b82f6', marginBottom: '16px', display: 'inline-block' }}>Insights & Updates</span>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '24px' }}>The Trushti Blog</h1>
          <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
            Latest news, product updates, and deep dives into retail technology and workforce management.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="wrap">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>Loading articles...</div>
          ) : posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>No articles published yet. Check back soon!</div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              {posts.map(post => (
                <article key={post.id} className="reveal" style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.1)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  
                  {/* Image Placeholder */}
                  <div style={{ height: '200px', background: post.image ? `url(${post.image}) center/cover` : '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                    {!post.image && '[Article Image]'}
                  </div>

                  <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2563eb', textTransform: 'uppercase', marginBottom: '12px', display: 'block' }}>Updates</span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px', lineHeight: 1.4 }}>{post.title}</h3>
                    <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>{post.content ? post.content.substring(0, 120) + '...' : ''}</p>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#64748b', fontSize: '0.9rem', borderTop: '1px solid #f1f5f9', paddingTop: '16px', marginTop: 'auto' }}>
                      <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      <span>By {post.author || 'Admin'}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="text-center reveal" style={{ marginTop: '64px' }}>
            <button className="btn btn-ghost" style={{ padding: '12px 24px', border: '1px solid #cbd5e1' }}>Load More Articles</button>
          </div>
        </div>
      </section>
    </main>
  );
}
