﻿using DataContract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpApp.Task
{
    internal class TaskFactory
    {
        internal static ITask CreateTask(TaskDetail task)
        {
            if(task.Type == TaskType.download)
            {
                string connectionstring = string.Format("DefaultEndpointsProtocol=https;AccountName={0};AccountKey={1}", task.TaskInfo.StorageAccountName, task.TaskInfo.StorageAccountKey);
                string container = task.TaskInfo.BlobContainer;
                string file = task.TaskInfo.BlobName;

                return new DownloadTaskWorker(connectionstring, container, file);
            }

            return null;
        }
    }
}
