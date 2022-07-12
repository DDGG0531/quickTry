import React, { useState, useRef, useCallback } from 'react'
import useBookSearch from '../libs/useBookSearch'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'

export default function MyInfiniteScroll() {
  // const [query, setQuery] = useState('')
  // const [pageNumber, setPageNumber] = useState(1)
  // const {
  //   books: items,
  //   hasMore,
  //   loading,
  //   error
  // } = useBookSearch(query, pageNumber)

  // function handleSearch(e) {
  //   setQuery(e.target.value)
  //   setPageNumber(1)
  // }

  const fetchPage = async pageParam => {
    const res = await axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q: 'abc', page: pageParam }
    })

    return {
      data: res.data.docs.map(b => b.title),
      hasMore: res.data.docs.length > 0
    }
  }

  const {
    data,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage
  } = useInfiniteQuery(['books'], ({ pageParam = 1 }) => fetchPage(pageParam), {
    getNextPageParam: (_lastPage, pages) => {
      console.log('_lastPage', _lastPage)
      if (_lastPage.hasMore) {
        return pages.length + 1
      } else {
        return undefined
      }
    }
  })

  const items =
    data?.pages
      ?.reduce((acc, current) => {
        return [...acc, current.data]
      }, [])
      .flat() || []

  return (
    <>
      {/* <input type="text" value={query} onChange={handleSearch}></input> */}

      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        // refreshFunction={this.refresh}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        // }
      >
        {items.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item}</h3>
            </div>
          )
        })}
      </InfiniteScroll>
    </>
  )
}

// export default function MyInfiniteScroll() {
//   const [query, setQuery] = useState('')
//   const [pageNumber, setPageNumber] = useState(1)

//   const { books, hasMore, loading, error } = useBookSearch(query, pageNumber)

//   const observer = useRef()
//   const lastBookElementRef = useCallback(
//     node => {
//       if (loading) return
//       if (observer.current) observer.current.disconnect()
//       observer.current = new IntersectionObserver(entries => {
//         if (entries[0].isIntersecting && hasMore) {
//           setPageNumber(prevPageNumber => prevPageNumber + 1)
//         }
//       })
//       if (node) observer.current.observe(node)
//     },
//     [loading, hasMore]
//   )

//   function handleSearch(e) {
//     setQuery(e.target.value)
//     setPageNumber(1)
//   }

//   return (
//     <>
//       <input type="text" value={query} onChange={handleSearch}></input>
//       {books.map((book, index) => {
//         if (books.length === index + 1) {
//           return (
//             <div ref={lastBookElementRef} key={book}>
//               {book}
//             </div>
//           )
//         } else {
//           return <div key={book}>{book}</div>
//         }
//       })}
//       <div>{loading && 'Loading...'}</div>
//       <div>{error && 'Error'}</div>
//     </>
//   )
// }
