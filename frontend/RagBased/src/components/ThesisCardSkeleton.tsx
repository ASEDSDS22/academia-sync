import React from 'react';

export function ThesisCardSkeleton() {
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5 animate-pulse">
      {/* Title skeleton */}
      <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
      
      {/* Subtitle skeleton */}
      <div className="h-4 bg-gray-100 rounded mb-4 w-full"></div>
      
      {/* Authors skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-3 bg-gray-100 rounded w-5/6"></div>
        <div className="h-3 bg-gray-100 rounded w-4/6"></div>
      </div>
      
      {/* Content skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-3 bg-gray-100 rounded w-full"></div>
        <div className="h-3 bg-gray-100 rounded w-full"></div>
        <div className="h-3 bg-gray-100 rounded w-3/4"></div>
      </div>
      
      {/* Keywords skeleton */}
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="h-5 bg-gray-100 rounded-full w-16"></div>
        <div className="h-5 bg-gray-100 rounded-full w-20"></div>
        <div className="h-5 bg-gray-100 rounded-full w-24"></div>
      </div>
      
      {/* Footer info skeleton */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <div className="h-3 bg-gray-100 rounded w-24"></div>
        <div className="h-6 bg-gray-100 rounded w-12"></div>
      </div>
    </div>
  );
}

export function SearchPageSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {Array.from({ length: 6 }).map((_, i) => (
        <ThesisCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function ThesisDetailSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Header skeleton */}
      <div className="bg-white border-b border-gray-100 p-6 mb-8">
        <div className="max-w-3xl mx-auto">
          <div className="h-8 bg-gray-200 rounded mb-4 w-4/5"></div>
          <div className="h-4 bg-gray-100 rounded mb-3 w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-3/4"></div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        {/* Main details */}
        <div className="bg-white rounded-lg border border-gray-100 p-6 space-y-4">
          <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-3 bg-gray-100 rounded w-full"></div>
            <div className="h-3 bg-gray-100 rounded w-5/6"></div>
            <div className="h-3 bg-gray-100 rounded w-4/6"></div>
          </div>
        </div>

        {/* Metadata section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-100 p-4">
              <div className="h-4 bg-gray-200 rounded mb-3 w-1/2"></div>
              <div className="h-3 bg-gray-100 rounded w-3/4"></div>
            </div>
          ))}
        </div>

        {/* Related theses */}
        <div>
          <div className="h-6 bg-gray-200 rounded mb-4 w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <ThesisCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomepageSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Featured section */}
      <div className="space-y-4 mb-8">
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-100 rounded w-2/3"></div>
      </div>
      
      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <ThesisCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
