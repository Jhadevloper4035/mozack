// components/InteriorCollections.jsx
'use client';

import { useState } from 'react';

const collections = [
  {
    id: 1,
    title: 'Modern Minimalist Collection',
    label: '01.',
  },
  {
    id: 2,
    title: 'Cozy Industrial Collection',
    label: '02.',
  },
  {
    id: 3,
    title: 'Classic Elegant Collection',
    label: '03.',
  },
  {
    id: 4,
    title: 'Contemporary Urban Collection',
    label: '04.',
  },
];

export default function InteriorCollections() {
  const [hoveredId, setHoveredId] = useState(null);

  const handleDownload = (collectionTitle) => {
    console.log(`Downloading: ${collectionTitle}`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="interior-collections-section">
        <div className="container" >
         <div className="heading-section text-center">
          <h3 className="heading wow fadeInUp">Customer Say!</h3>
          <p className="subheading wow fadeInUp">
            Our customers adore our products, and we constantly aim to delight
            them.
          </p>
        </div>
          <div className="collections-wrapper">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className={`collection-item ${hoveredId === collection.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredId(collection.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="collection-content">
                  {/* Collection Title */}
                  <div className="title-wrapper">
                    <span className="collection-label">{collection.label}</span>
                    <h3 className="collection-title">{collection.title}</h3>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(collection.title)}
                    className="download-btn"
                    aria-label={`Download ${collection.title}`}
                  >
                    Download
                    <svg
                      className="download-icon"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <style jsx>{`
        /* Section Styles */
        .interior-collections-section {
           background-color : #333;
          color: white;
          padding: 80px 0;
          position: relative;
          min-height: 100vh;
          margin-top:80px;
        }

        .heading-section h3, .heading-section .heading{

        color : #fff !important;
        }

        /* Header Content */
        .header-content {
          text-align: center;
          max-width: 56rem;
          margin: 0 auto 3rem;
        }

        .main-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .subtitle {
          color: #d1d5db;
          font-size: 1.125rem;
          line-height: 1.75;
        }

        /* Collections Wrapper */
        .collections-wrapper {
          max-width: 72rem;
          margin: 0 auto;
        }

        /* Collection Item */
        .collection-item {
          border-bottom: 1px solid #374151;
          transition: all 0.3s ease;
          position: relative;
        }

        .collection-item:hover {
          border-bottom-color: #6b7280;
        }

        .collection-item::before {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ffffff, #6b7280);
          transition: width 0.4s ease-in-out;
        }

        .collection-item.hovered::before {
          width: 100%;
        }

        /* Collection Content */
        .collection-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 2rem 0;
          flex-wrap: wrap;
        }

        /* Title Wrapper */
        .title-wrapper {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex: 1;
          min-width: 250px;
        }

        .collection-label {
          color: #6b7280;
          font-size: 1rem;
          font-weight: 500;
          min-width: 40px;
        }

        .collection-title {
          font-size: 2rem;
          font-weight: 600;
          color: #9ca3af;
          transition: color 0.3s ease;
        }

        .collection-item:hover .collection-title {
          color: white;
        }

        /* Download Button */
        .download-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: 2px solid #4b5563;
          border-radius: 9999px;
          font-size: 1rem;
          font-weight: 500;
          background: transparent;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .download-btn:hover {
          background: white;
          color: #111827;
          border-color: white;
        }

        .collection-item:hover .download-btn {
          border-color: #6b7280;
        }

        .download-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        /* Scroll to Top Button */
        .scroll-top-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: white;
          color: #111827;
          padding: 1rem;
          border-radius: 9999px;
          border: none;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 50;
          display: none;
        }

        .scroll-top-btn:hover {
          background: #f3f4f6;
          transform: translateY(-2px);
        }

        /* Tablet Styles */
        @media (min-width: 640px) {
          .interior-collections-section {
            padding: 6rem 0;
          }

          .main-title {
            font-size: 2.5rem;
          }

          .collection-content {
            flex-wrap: nowrap;
          }

          .collection-title {
            font-size: 2.5rem;
          }

          .title-wrapper {
            min-width: auto;
          }
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .interior-collections-section {
            padding: 80px 0;
          }

          .header-content {
            margin-bottom: 5rem;
          }

          .main-title {
            font-size: 3.75rem;
          }

          .subtitle {
            font-size: 1.25rem;
          }

          .collection-content {
            padding: 2.5rem 0;
          }

          .collection-title {
            font-size: 3rem;
          }

          .collection-label {
            font-size: 1rem;
          }

          .scroll-top-btn {
            display: block;
          }
        }

        /* Extra Large Desktop */
        @media (min-width: 1280px) {
          .collection-title {
            font-size: 2rem;
          }
        }

        /* Mobile Optimization */
        @media (max-width: 639px) {
          .interior-collections-section {
            padding: 3rem 0;
          }

          .header-content {
            margin-bottom: 2rem;
          }


          .collection-content {
            padding: 1.5rem 0;
            flex-direction: column;
            align-items: flex-start;
          }

          .title-wrapper {
            gap: 1rem;
            align-items: flex-start;
            width: 100%;
          }

          .collection-title {
            font-size: 1.2rem;
          }

          .download-btn {
            align-self: flex-end;
            padding: 0.625rem 1.25rem;
            font-size: 0.875rem;
          }

          .download-icon {
            width: 1rem;
            height: 1rem;
          }
        }
      `}</style>
    </>
  );
}