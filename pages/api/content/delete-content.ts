import { NextApiRequest, NextApiResponse } from 'next'

import { ContentService } from '@/backend/service/content-service/content-service'
import { wrapperEndpoint } from 'common-abstract-fares-system'

/*
    @ericchen:

    put your explanation here
*/

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const service = new ContentService()
  const result = await wrapperEndpoint(
    req,
    'DELETE',
    service.deleteContent(req.query.ids as string)
  )
  res.status(200).json(result)
}
