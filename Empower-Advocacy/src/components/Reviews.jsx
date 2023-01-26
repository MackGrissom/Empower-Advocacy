import { StarIcon } from '@heroicons/react/20/solid'

const reviews = {
  average: 5,
  totalCount: 4,
  counts: [
    { rating: 5, count: 4 },
    { rating: 4, count: 0 },
    { rating: 3, count: 0 },
    { rating: 2, count: 0 },
    { rating: 1, count: 0 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>There are not enough words to describe how amazing Katie is at her job. She taught us how to advocate for our son, the ins and outs of an IEP, and how to be the voice for our child in the education system. We are now confident going into our  son’s IEP meetings because we understand the process clearly, and we know what is right vs wrong. Katie is not only amazing at her job, but she is loyal and trustworthy. We are honored to have Katie by our side for any future educational needs for our child. </p>
      `,
      author: 'Brittany Phan',
      avatarSrc:
        'https://lh3.googleusercontent.com/a-/AD5-WCnv84KDVu1xpEhWmVmAsWqD-gQcntmj8-JX5wxm4w=w150-h150-p-rp-mo-br100',
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Katie is not only exceptionably knowledgeable about the ins and outs of the complex special education system, but she also cares deeply about your child and their growth and success. As a mother and a special education teacher it's not only her job but her passion - and that's reflected in the care and attention your family receives from Empower Advocacy. If you want the knowledge needed to navigate the school systems that don't prioritize your child or give them the attention they rightfully deserve, then look no further. Empower Advocacy is the correct decision. </p>
      `,
      author: 'Steve Smith',
      avatarSrc:
        'https://lh3.googleusercontent.com/a/AEdFTp5xg0DdQTM8g6t-klhiTIDBVp3RLZRjB2AbHNjK=w150-h150-p-rp-mo-br100',
    },
    {
      id: 3,
      rating: 5,
      content: `
        <p>Katie has excellent knowledge of both IEPs and the special education community. She is compassionate and cares for each of her client’s needs. She is not afraid to question educated people on their recommendations for students. She provides out of the box thinking and ideas to unlock success for your child. Katie has working knowledge of resources available to families and can explain the laws and policies to you in a way you can understand. She will work hard to make sure your child is getting the proper resources and services. </p>
      `,
      author: 'Lindsey Petitti',
      avatarSrc:
        'https://lh3.googleusercontent.com/a/AEdFTp7_mi_qHMcWXwvl2oNLc2QaFFPV9aAnOfY8g6qM=w150-h150-p-rp-mo-br100',
    },
    
    // More reviews...
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-32 lg:px-8">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customer Reviews</h2>

          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                      'flex-shrink-0 h-5 w-5'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">Based on {reviews.totalCount} reviews</p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>

            <dl className="space-y-3">
              {reviews.counts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex flex-1 items-center">
                    <p className="w-3 font-medium text-gray-900">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>
                    <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                      <StarIcon
                        className={classNames(
                          count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                          'flex-shrink-0 h-5 w-5'
                        )}
                        aria-hidden="true"
                      />

                      <div className="relative ml-3 flex-1">
                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                        {count.count > 0 ? (
                          <div
                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                            style={{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                    {Math.round((count.count / reviews.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
            <p className="mt-1 text-sm text-gray-600">
              If you’ve used our service, share your thoughts with others
            </p>

            <a
              href="https://www.google.com/search?q=empower+advocacy&sxsrf=AJOqlzXwC6H0lyCuiG92ytSdKnCNulBKag%3A1674861408327&ei=YFvUY_HJE8e7qtsPqfu22AE&ved=0ahUKEwjx-an68Oj8AhXHnWoFHam9DRsQ4dUDCBA&uact=5&oq=empower+advocacy&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgUIABCGAzIFCAAQhgM6CggAEEcQ1gQQsAM6BQgAEJECOhEILhCABBCxAxCDARDHARDRAzoLCAAQgAQQsQMQgwE6EQguEIMBEMcBELEDENEDEIAEOgsILhCABBDHARDRAzoICC4Q1AIQkQI6CggAELEDEIMBEEM6BwguENQCEEM6BQgAEIAEOgoIABCABBAUEIcCOggIABCABBCxAzoICC4QgAQQsQM6EAgAEIAEEBQQhwIQsQMQgwE6EAguELEDEMcBENEDENQCEEM6CgguEMcBEK8BEEM6BAgAEEM6CAgAELEDEIMBOhEILhCABBCxAxCDARDHARCvAToNCC4QrwEQxwEQsQMQQzoLCC4QgAQQxwEQrwE6CwguEK8BEMcBEIAESgQIQRgASgQIRhgAUKgLWMYaYIgcaANwAXgAgAGyAYgBuw2SAQM4LjiYAQCgAQHIAQjAAQE&sclient=gws-wiz-serp#lrd=0x8ebe0560fd16cfe7:0x735f4b23abbf31df,1,,,,"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
            >
             See More Reviews
            </a>
          </div>
        </div>

        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Recent reviews</h3>

          <div className="flow-root">
            <div className="-my-12 divide-y divide-gray-200">
              {reviews.featured.map((review) => (
                <div key={review.id} className="py-12">
                  <div className="flex items-center">
                    <img src={review.avatarSrc} alt={`${review.author}.`} className="h-12 w-12 rounded-full" />
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                      <div className="mt-1 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div
                    className="mt-4 space-y-6 text-base italic text-gray-600"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
