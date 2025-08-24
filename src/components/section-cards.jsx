import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CardContent } from "./ui/card";
import { Link } from "react-router";

export function SectionCards() {
  return (
    <div
      className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Tổng doanh thu</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            $1,250.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-[#008000]">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Xu hướng tăng trong tháng này<IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Khách truy cập trong 6 tháng qua
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Khách hàng mới</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            1,234
          </CardTitle>
          <CardAction >
            <Badge variant="outline" className="text-red-200">
              <IconTrendingDown />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Giảm 20% trong tháng này<IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Chú ý việc marketing để tiếp cần khách hàng
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Đơn hàng</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            45,678
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-[#008000]">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Tăng trưởng tốt<IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Đơn hàng được đặt trong 6 tháng qua
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card gap-2">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-xl">
            Top 3 sản phẩm bán chạy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <Link to={"/"} className="flex gap-2">
                <span className="shrink-0">1.</span>
                <p>
                  Đầm lệch vai chân đổ
                </p>
              </Link>
            </li>
            <li>
              <Link to={"/"} className="flex gap-2">
                <span className="shrink-0">2.</span>
                <p>
                  Đầm lệch vai chân đổ
                </p>
              </Link>
            </li>
            <li>
              <Link to={"/"} className="flex gap-2">
                <span className="shrink-0">3.</span>
                <p>
                  Đầm lệch vai chân đổ
                </p>
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
