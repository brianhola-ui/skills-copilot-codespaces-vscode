function skillsMember() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
              Our Members
            </h1>
            <p className="mt-2 text-gray-500 dark:text-gray-300">
              Meet our talented and dedicated team.
            </p>
          </div>
        </div>

        <div className="grid gap-8 mt-8 md:grid-cols-2 xl:grid-cols-3">
          {/* Member Card */}
          <div className="flex items-center p-6 bg-white rounded-lg dark:bg-gray-800">
            <img
              className="w-16 h-16 rounded-full"
              src="https://randomuser.me/api/portraits