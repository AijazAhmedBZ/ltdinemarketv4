export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Category: {params.slug}</div>
  }