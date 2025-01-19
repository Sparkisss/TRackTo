interface LoaderProps {
    isLoading: boolean;
    error: string;
  }
  
export function Loader({ isLoading, error }: LoaderProps) {
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  return null
}
  