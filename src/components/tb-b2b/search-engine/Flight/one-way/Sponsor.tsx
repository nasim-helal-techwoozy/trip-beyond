type Props = {}

const Sponsor = (props: Props) => {
  return (
    <aside className="min-w-full bg-white p-4 shadow-lg rounded-lg space-y-4">
    <h3 className="text-lg font-semibold mb-4">Sponsor</h3>
    <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
      <span className="text-gray-600"></span>
    </div>
    <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
      <span className="text-gray-600">Ad Space</span>
    </div>
  </aside>
  )
};

export default Sponsor;