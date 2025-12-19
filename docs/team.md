---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
const teachers = [
  {
    avatar: 'https://s1.locimg.com/2025/09/27/3adb9fd923ea8.jpg',
    name: '姚建龙',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/YJLAugus' }
    
    ]
  }

]
const stumembers = [
  {
    avatar: 'https://s1.locimg.com/2025/09/27/3eae62a39059d.jpg',
    name: '种法杞',
    title: '第十六届蓝桥杯全国总决赛C/C++程序设计大学C组三等奖，山东省一等奖',
    
  },
  {
    avatar: 'https://s1.locimg.com/2025/09/27/2f24853d456e8.jpg',
    name: '王新淇',
    title: '第十六届蓝桥杯山东赛区C/C++程序设计大学C组一等奖',
    
  },
  {
    avatar: 'https://s1.locimg.com/2025/09/27/2c6dbef46fb2f.jpg',
    name: '刘明华',
    title: '第十六届蓝桥杯山东赛区C/C++程序设计大学C组一等奖',
    
  },
  {
    avatar: 'https://s1.locimg.com/2025/09/27/2eef18b3050fa.jpg',
    name: '赵天宇',
    title: '第十六届蓝桥杯山东赛区C/C++程序设计大学C组一等奖'
  },
  {
    avatar: 'https://s1.locimg.com/2025/09/27/2e540e769188c.jpg',
    name: '周政轩',
    title: '第十六届蓝桥杯山东赛区C/C++程序设计大学B组三等奖'
  },
 
]
</script>



<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>导师介绍</template>
    <template #lead>欢迎大家进入实验室，本人兴趣广泛，乒乓球作为日常运动，欢迎大家约球。计算机相关技术涉猎较广，如果学习上有什么技术性问题，欢迎与我探讨。从不push学生，认为每个人都有自己的学习和生活方式，只做引导，希望大家有内驱力。现在实验室主要做蓝桥杯方面的比赛，如果对于ACM感兴趣也欢迎加入。在实习就业、出国留学也有一定了解，如果需要可以与我交流。<p style="color: blue;"><b>邮箱：i@uzz.edu.cn</b></p>
</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="teachers" />
  <VPTeamPageSection>
    <template #title>实验室成员</template>
    <template #lead>恭喜以下同学荣获第十六届蓝桥杯全国软件和信息技术专业人才大赛全国总决赛C/C++程序设计大学B、C组国赛奖、省赛奖。</template>
    <template #members>
      <VPTeamMembers size="small" :members="stumembers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
