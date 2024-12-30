  import React from 'react';
import { GitHubRepoData } from '~/routes/apps';

  interface CommunityAppProps {
    repoData?: GitHubRepoData
    isLoading?: boolean;
  }

  export const CommunityApp: React.FC<CommunityAppProps> = ({
    repoData,
    isLoading = false
  }) => {

    if (isLoading) {
      return (
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg mb-4 bg-white dark:bg-gray-800 animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
          
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4"></div>
          
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
          
          <div className="mt-4 flex gap-4">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
          </div>
        </div>
      );
    }

    if (!repoData) return null;

    return (
      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg mb-4 bg-white dark:bg-gray-800">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {repoData.name}
        </h2>        
      
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {repoData.description}
        </p>
      
        {repoData.author && (
          <div className="text-sm gap-2 text-gray-600 dark:text-gray-400 flex">
            <p>
              Author:
            </p>
            <div className="flex gap-1">
              <img src={repoData.authorProfile} className="w-5 h-5 rounded-full overflow-hidden" alt="" />
              <a
                href={repoData.authorUrl || `https://github.com/${repoData.author}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:underline"
              >
                {repoData.author}
              </a>            
              </div>
          </div>
        )}

        <div className="flex gap-4 mb-4">
          {repoData.stargazers !== undefined && (
            <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              <span className="mr-1">★</span>
              {repoData.stargazers}
            </span>
          )}
          {repoData.watchers !== undefined && (
            <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              <span className="mr-1">👁</span>
              {repoData.watchers}
            </span>
          )}
        </div>
      
        <div className="mt-4 flex gap-4">
          <a
            href={repoData.releaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
          >
            <span className="mr-2">↓</span>
            Download Latest
          </a>
        
          <a
            href={repoData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    );
  };

  export default CommunityApp